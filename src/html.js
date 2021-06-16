//Manager HTML
const managerCard = (Manager) => {
    const {name, id, email, officeNumber, role} = Manager
    return `
        <div class = "column">
            <div class = "card">
                <div class = "cardContent">
                    <div class = "cardHeader">
                        <div class = "cardHeaderContent text-center bg-gradient bg-dark text-white">
                            <h4 class = "cardName">${name}</h4>
                            <p class = "cardRole">${role}</p>
                        </div>
                    </div>
                    <div class = "content text-center">
                        <div class = "column"> ID: ${id} </div>
                        <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                        <div class = "column"> Office Number: ${officeNumber} </div>
                    </div>
                </div>
            </div>
        </div>`
}

module.exports = managerCard