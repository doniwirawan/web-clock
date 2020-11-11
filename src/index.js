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

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const root = document.querySelector('.quote-area');
        const randoms = Math.floor(Math.random() * data.length);
        root.innerHTML = `
                    <p>"${data[randoms].text}"</p>
                    <p>-- ${data[randoms].author} --</p>
                `


        document.querySelector('.button').addEventListener('click', function () {
            // const root = document.querySelector('.quote-area');
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


updateTime();