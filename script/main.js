let intervalId;

document.querySelectorAll('.toggle_btn')
    .forEach(e => {
        e.addEventListener('click', e => {
            const menu = e.currentTarget.dataset.path;
            document.querySelectorAll('.dropdown-menu')
            .forEach( e => {
                if(!document.querySelector(`[data-target=${menu}]`)
                .classList.contains('open')){
                    e.classList.remove('menu-active');
                    e.classList.remove('open');
                    document.querySelector(`[data-target=${menu}]`)
                    .classList.add('menu-active');
                    intervalId = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`)
                        .classList.add('open');
                    },0);
                }
                if (document.querySelector(`[data-target=${menu}]`)
                .classList.contains('open')) {
                    clearTimeout(intervalId);
                    document.querySelector(`[data-target=${menu}]`)
                    .classList.remove('menu-active');
                    intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`)
                    .classList.remove('open');
                },0);
                }
            });
        });
    });

