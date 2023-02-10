export default async function CreateAndPost(e, sidebarTags, newPost) {
  e.preventDefault();
  const tagsArr = Object.entries(sidebarTags)
    .filter((item) => {
      return item[1] === true;
    })
    .map((item) => item[0]);
  const postObj = { ...newPost };
  postObj.tags = tagsArr;

  await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  });
}
