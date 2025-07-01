import React, { useRef, useState } from "react";
import Tesseract from "tesseract.js";

const ScanProfile = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [ocrText, setOcrText] = useState("");
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setOcrText("");
    setFormData({ nama: "", nik: "", alamat: "" });

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(file, "ind", {
        // logger: (m) => console.log(m), // optional: debug progress
      });
      //   console.log(text, "<< hasil scan");
      setOcrText(text);

      // Regex sederhana (tergantung hasil OCR bisa berubah)
      const nik = text.match(/\b\d{16}\b/);
      const nama = text.match(/Nama\s*[:\-]?\s*(.+)/i);
      const alamat = text.match(/Alamat\s*[:\-]?\s*(.+)/i);

      setFormData({
        nama: nama ? nama[1].split("\n")[0].trim() : "",
        nik: nik ? nik[0] : "",
        alamat: alamat ? alamat[1].split("\n")[0].trim() : "",
      });
    } catch (err) {
      console.error("OCR Error:", err);
      alert("Gagal membaca gambar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Edit User - Scan KTP</h2>

      <button
        onClick={() => fileInputRef.current.click()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Scanning..." : "Scan KTP"}
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleImageUpload}
      />

      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Nama"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="NIK"
          value={formData.nik}
          onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Alamat"
          value={formData.alamat}
          onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </form>

      {ocrText && (
        <div className="mt-4 text-sm text-gray-600">
          <strong>Hasil OCR Mentah:</strong>
          <pre className="bg-gray-100 p-2 mt-1 rounded">{ocrText}</pre>
        </div>
      )}
    </div>
  );
};

export default ScanProfile;
