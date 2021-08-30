RDS.addEventListener("click", RDS__clicked);

function RDS__clicked(event) {
    localStorage.clear();
    location.reload();
}
