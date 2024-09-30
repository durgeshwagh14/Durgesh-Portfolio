/* ========================== Aside ====================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                    //console.log("back-section"+ navList[j],this.querySelector("a"))
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0;i<totalSection ;i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0;i<totalSection ;i++)
        {
            allSection[i].classList.remove("active");
        }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#" +target).classList.add("active")
    }

    function updateNav(element)
    {
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click",function()
    {
        const sectionIndex =this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn()
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open")
            for(let i=0;i<totalSection;i++)
            {

            }
        }


/* ========================== Contact ====================*/
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Form submitted!');

        // Reset the form
        document.getElementById('myForm').reset();
    }


/* ========================== Contact ====================*/

// const link = document.getElementById('.github');

// link.addEventListener('click', function(event) {
    
//   event.preventDefault(); 
//   window.open('https://www.google.com', '_blank'); 
// });


