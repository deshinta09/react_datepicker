// import Card from "@/components/card/Card";
// import {
//   getArticle,
//   getArticleByCategory,
// } from "@/features/article/service/articleService";
// import formatDate from "@/helpers/formatDate";
// import { Article, ArticleResponse } from "@/types/type";
// import * as React from "react";

export default function DetailArticle(
  {
    //   params,
    // }: {
    //   params: { id: string };
  }
) {
  //   const { id } = await params;
  //   const article: Article = await getArticle(id);
  //   const sameContent: ArticleResponse = await getArticleByCategory("Religion");
  //   console.log(sameContent);

  return (
    <>
      <div className=" z-0 top-[96px] relative">
        {/* content */}
        <div className="w-full px-[160px] py-10  gap-[60px]">
          <div className="gap-10 max-w-[1120px] mx-auto flex flex-col">
            {/* head content */}
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-sm font-medium">
                {/* {formatDate(article?.createdAt)} . Created by{" "}
              {article.user.username} */}
                Created by
              </p>
              <p className="text-3xl">title</p>
            </div>

            {/* image */}
            <img
              src={"./react.svg"}
              alt="Image of Article"
              className="w-full h-[480px] object-cover rounded-[12px]"
            />

            {/* conten -desc */}
            {/* <div>
            {article.content.split("\n").map((paragraf, index) => (
              <p
                key={index}
                className="mb-4 text-base text-justify max-w-[1120px]"
              >
                {paragraf}
              </p>
            ))}
          </div> */}
            <div>
              <p
                // key={index}
                className="mb-4 text-base text-justify max-w-[1120px]"
              >
                paragraf
              </p>
            </div>
          </div>
        </div>

        {/* same category */}
        <div className=" relative w-full pt-10 pb-[100px] px-[180px] gap-[60px]">
          <div className="w-full max-w-[1080px] mx-auto gap-6 flex flex-col">
            <p className="font-bold text-xl">Other article</p>
            <div className="grid grid-cols-3 gap-10">
              {/* {sameContent?.data.map((article) => (
              <Card key={article.id} article={article} />
            ))} */}
            </div>
          </div>
        </div>
      </div>
      <footer className="bottom-0 w-full h-[100px] bg-[#2563EBDB] flex justify-center items-center">
        <img src={"/Logo.svg"} alt="" />{" "}
        <span className="text-white">
          © 2025 Blog genzet. All rights reserved
        </span>
      </footer>
    </>
  );
}
