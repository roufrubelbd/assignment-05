// --------- heart button functionality to increase count by 1 ---------
const heartBtn = document.getElementsByClassName('heart-btn')
let count = 0;
for (button of heartBtn) {
  button.addEventListener('click', function () {
    count ++;
    document.getElementById('heart-count').innerText = count;
  });
}

// --------- call button functionality to decrease count by 20 ---------
const callBtn = document.getElementsByClassName('call-btn')
const callCountInitial = document.getElementById('call-count').innerText;
let callCount = callCountInitial;    
for (button of callBtn) {
  button.addEventListener('click', function (e) {
    callCount -= 20;
    if (callCount < 20) {
      alert("You don't have more than 20 coin to make a call");
      return
    }
    const serviceName = e.target.parentNode.parentNode.children[1].innerText;
    const serviceNumber = e.target.parentNode.parentNode.children[3].innerText;
    const serviceSector = e.target.parentNode.parentNode.children[4].innerText;
    alert(`Service Name: ${serviceName}, Service Number: ${serviceNumber}`);
    document.getElementById('call-count').innerText = callCount;

    const callHistory = document.getElementById('call-history');

    const newCall = document.createElement("div");
    newCall.innerHTML = `
    <div
            class="flex justify-between items-center bg-[#fafafa] p-2 rounded-lg mt-2 text-xs border border-gray-200"
          >
            <div>
              <h2 class="font-bold mt-2">${serviceName}</h2>
              <p class="secondary-color text-sm">${serviceNumber}</p>
            </div>
            <p class="px-3 py-1 rounded-xl text-sm">${serviceSector }</p>
          </div>
    `;

    callHistory.appendChild(newCall);
    
  });
}

// --------- clear button functionality to clear call history ---------
document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('call-history').innerHTML = '';
  alert('The Call history is being cleared');
}); 