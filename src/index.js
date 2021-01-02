const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL."));
    $(".day").text(moment().format("dddd."));
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};

fetch("//type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // menambahkan quote secara default
        const root = document.querySelector('.quote-area');
        const randoms = Math.floor(Math.random() * data.length);
        root.innerHTML = `
                    <p>"${data[randoms].text}"</p>
                    <p>-- ${data[randoms].author} --</p>
                `

        // ketika diklik maka akan generate quote baru
        document.querySelector('.button').addEventListener('click', function () {
            const random = Math.floor(Math.random() * data.length)
            if (data[random].author === null) {
                root.innerHTML = `
                    <p>"${data[random].text}"</p>
                    <p>-- ${data[random].author = 'Unknown'} --</p>
                `
            } else {
                root.innerHTML = `
                    <p>"${data[random].text}"</p>
                    <p>-- ${data[random].author} --</p>
                `

            }



        })


    });






const changeBg = () => {
    fetch('//api.unsplash.com/photos/random?client_id=gfXzHUZJnwnsObUFyB0hxiOMXrt_nA4V7UyjpCrRK6w')
        .then(response => response.json())
        .then(data => {
            console.log(data.urls.regular);
            const bgEl = document.querySelector('.clock');
            bgEl.style.backgroundImage = `url('${data.urls.raw}')`;
        })
}

document.querySelector('.button2').addEventListener('click', changeBg);

setInterval(() => changeBg(), 3600000);

updateTime();