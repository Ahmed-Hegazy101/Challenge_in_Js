let sampleCard ={
    Title : "ELforma",
    Description : "Thes web site contine any more about gum",
    Date : "15/4/2005"
};
let webSite =`
<div class="card">
<h3>${listDis.Title}</h3>
<p>${listDis.Description}</p>
<span>${listDis.Date}</span>
</div>
`;
document.write(webSite.repeat(7));