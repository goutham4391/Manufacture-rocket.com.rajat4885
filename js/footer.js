window.addEventListener('DOMContentLoaded', (event) => {
  const jobsList = document.querySelectorAll(".lever-jobs-list");
  const url = "https://api.lever.co/v0/postings/rocketcommunications?limit=8&mode=json";
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      jobsList.forEach((jobListOnPage) => {
        data.forEach((job) => {
          const toAdd = document.createElement("li");
          const aTag = document.createElement("a");
          aTag.innerText = job.text;
          aTag.setAttribute("href", job.hostedUrl);
          aTag.setAttribute("target", "_blank");
          toAdd.appendChild(aTag);
          jobListOnPage.appendChild(toAdd);  
        });
      });
    })
    .catch((err) => console.log(err));
});
