// Daftar proyek dengan gambar dan deskripsi
const projects = [
{ 
        title: "liffardent official marchendise store", 
        description: "Saya telah mengembangkan sebuah website e-commerce bertema baju distro, yang dirancang untuk memberikan pengalaman berbelanja yang mudah, menarik, dan responsif bagi para penggemar fashion. Dalam proyek ini, saya menggunakan desain modern dengan penekanan pada kemudahan navigasi dan daya tarik visual, sesuai dengan target pasar dari brand distro. .", 
        link: "#",
        image: "web ecomr.jpg" // contoh gambar diskon e-ecommrce
    },

];

const projectList = document.getElementById("project-list");
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-item");
    projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn">Lihat Proyek</a>
    `;
    projectList.appendChild(projectDiv);
});
