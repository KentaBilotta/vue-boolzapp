const chats = document.querySelector(".chat-list");

for (let i = 1; i <= 10; i++) {
    chats.innerHTML += `
                        <div class="row bg-white border-bottom border-light" style="height: 60px">
                            <div class="col-2 d-flex justify-content-center align-items-center h-100">
                                <img src="img/avatar_2.jpg" alt="user-img" class="rounded-circle" style="height: 80%">
                            </div>
                            <div class="col-10 h-100 mt-2 relative-last-time">
                                <div class="row fw-semibold">Giggino</div>
                                <div class="row fw-light text-secondary" style="font-size: 0.8rem">Ultimo messaggio inviato</div>
                                <div class="last-time text-secondary">12.00</div>
                            </div>    
                        </div>
    `
}