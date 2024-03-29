 document.addEventListener('DOMContentLoaded', function () {
        const modals = {
                one: new bootstrap.Modal(document.getElementById('modalMenuCardOne'), {}),
                two: new bootstrap.Modal(document.getElementById('modalMenuCardTwo'), {}),
                three: new bootstrap.Modal(document.getElementById('modalMenuCardThree'), {}),
                four: new bootstrap.Modal(document.getElementById('modalMenuCardFour'), {}),
                five: new bootstrap.Modal(document.getElementById('modalMenuCardFive'), {}),
                six: new bootstrap.Modal(document.getElementById('modalMenuCardSix'), {}),
                seven: new bootstrap.Modal(document.getElementById('modalMenuCardSeven'), {}),
                eight: new bootstrap.Modal(document.getElementById('modalMenuCardEight'), {}),
                // Add modals for other images as needed
            };
        const buttons = document.querySelectorAll('.card button');
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    const modalId = button.getAttribute('data-modal');
                    modals[modalId].show();
                });
            });
        });

