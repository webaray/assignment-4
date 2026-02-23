

let interviewlist = [];
let rejectedlist = [];
let currentStatus = "all-filter-btn";


// ELEMENTS


const total = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectedCount = document.getElementById("rejected");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const filterSection = document.getElementById("filterSection");
const mainContainer = document.querySelector("main");


// COUNT


function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewlist.length;
  rejectedCount.innerText = rejectedlist.length;
}

calculateCount();


// TAB STYLE


function toggleStyle(id) {

  [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-white", "text-black");
  });

  const selected = document.getElementById(id);
  selected.classList.add("bg-[#3B82F6]", "text-white");
  selected.classList.remove("bg-white", "text-black");

  currentStatus = id;

  if (id === "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderFiltered();
  }
}


// RENDER FILTERED CARDS


function renderFiltered() {
  filterSection.innerHTML = "";

  let list = currentStatus === "interview-filter-btn"
    ? interviewlist
    : rejectedlist;

  if (list.length === 0) {
    filterSection.innerHTML = `
      <div class="p-28 bg-white mt-4 text-center space-y-2.5 rounded-[8px] ">

            <i class="fa-solid fa-file-lines text-6xl text-blue-400"></i>
            <h3 class="font-bold">No jobs available</h3>
            <p class="text-gray-400">Check back soon for new job opportunities</p>

        </div>
    `;
    return;
  }

  list.forEach(job => {
    filterSection.innerHTML += `
       <div class="card-1 left-side py-10 px-5 bg-white mt-4  space-y-2.5 rounded-[8px] flex  justify-between ">
    
                <div class="job-card space-y-2.5 w-[80%]" >
        
                    <h3 class="jobTitle font-bold">Mobile First Corp</h3>
                    <p class="jobPosiation text-gray-400">React Native Developer</p>
                    <p class="jobType text-gray-400">Remote • Full-time • $130,000 - $175,000</p>
        
                    <button class=" status py-2 px-3 bg-[#EEF4FF]  rounded-[4px] mr-2 uppercase font-bold">Not Applied</button>
                    <p class="jobDelies">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="mt-5">
                        <button class=" interview-btn py-2 px-3 border-2 border-green-500 rounded-[4px] mr-2 uppercase text-green-500 font-bold cursor-pointer">interview</button>
                        <button class=" rejected-btn py-2 px-3 border-2 border-red-600 uppercase text-red-500 font-bold cursor-pointer" >Rejected</button>
                    </div>
        
                </div>
                
                <div class=" w-20 h-20 rounded-full border border-gray-300 flex items-center  justify-center bg-gray-100 ">
                <button class="delete-btn cursor-pointer" ><i class=" fa-solid fa-trash-can  text-gray-500 text-2xl"></i></button>
                 </div>
            </div>
    `;
  });
}


// CLICK EVENTS


mainContainer.addEventListener("click", function (event) {

  const card = event.target.closest(".job-card");
  if (!card) return;

  const jobTitle = card.querySelector(".jobTitle").innerText;
  const jobPosiation = card.querySelector(".jobPosiation").innerText;
  const jobType = card.querySelector(".jobType").innerText;
  const jobDelies = card.querySelector(".jobDelies").innerText;

  const cardInfo = { jobTitle, jobPosiation, jobType, jobDelies };

  // INTERVIEW
  if (event.target.classList.contains("interview-btn")) {

    card.querySelector(".status").innerText = "interview";
    cardInfo.status = "interview";

    if (!interviewlist.find(j => j.jobTitle === jobTitle)) {
      interviewlist.push(cardInfo);
    }

    rejectedlist = rejectedlist.filter(j => j.jobTitle !== jobTitle);

    if(currentStatus !== "all-filter-btn") renderFiltered();
    calculateCount();
  }

  // REJECTED
  if (event.target.classList.contains("rejected-btn")) {

    card.querySelector(".status").innerText = "rejected";
    cardInfo.status = "rejected";

    if (!rejectedlist.find(j => j.jobTitle === jobTitle)) {
      rejectedlist.push(cardInfo);
    }

    interviewlist = interviewlist.filter(j => j.jobTitle !== jobTitle);

    if(currentStatus !== "all-filter-btn") renderFiltered();
    calculateCount();
  }

  // DELETE
  if (event.target.closest(".delete-btn")) {

    card.remove();

    interviewlist = interviewlist.filter(j => j.jobTitle !== jobTitle);
    rejectedlist = rejectedlist.filter(j => j.jobTitle !== jobTitle);

    calculateCount();
  }

});

