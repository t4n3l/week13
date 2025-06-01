fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('fullName').textContent = data.firstName + ' ' + data.lastName;
    document.getElementById('phone').textContent = data.phone;
    document.getElementById('email').textContent = data.email;
    document.getElementById('web').textContent = data.web;
    document.getElementById('addressLine1').textContent = data.addressLine1;
    document.getElementById('addressLine2').textContent = data.addressLine2;
    document.getElementById('zip').textContent = data.zip;

    const eduDiv = document.getElementById('education');
    data.education.forEach(item => {
      const div = document.createElement('div');
      div.className = 'list';
      div.innerHTML = `<div class="year">${item.year}</div><div class="text">${item.text}</div>`;
      eduDiv.appendChild(div);
    });

    const workDiv = document.getElementById('work');
    data.work.forEach(item => {
      const div = document.createElement('div');
      div.className = 'list';
      div.innerHTML = `<div class="year">${item.year}</div><div class="text">${item.text}</div>`;
      workDiv.appendChild(div);
    });

    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    document.getElementById('referenceName').textContent = 'Name: ' + data.reference.name;
    document.getElementById('referencePosition').textContent = 'Position: ' + data.reference.position;
    document.getElementById('referenceCompany').textContent = 'Company: ' + data.reference.company;
    document.getElementById('referenceEmail').textContent = 'Email: ' + data.reference.email;

    document.getElementById('instagram').textContent = data.instagram;
    document.getElementById('linkedin').textContent = data.linkedin;
  })