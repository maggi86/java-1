
names = ["Michaela", "Meagan",
"Charles", "Liam", 
"Rasheedah", "Bulelani"];
const wrapper = document.createElement('ul');
document.getElementsByTagName('body')[0].appendChild(wrapper);
function smartPeople() {
names.forEach(item => {
  var list = document.createElement('li')
  list.innerHTML += item;
  wrapper.appendChild(list);
});
}
smartPeople();

