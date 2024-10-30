var _a;
function toggleSkills() {
    var skillsContent = document.getElementById('skills-content');
    var toggleButton = document.querySelector('.toggle-button');
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
    var number = (_c = document.getElementById('number')) === null || _c === void 0 ? void 0 : _c.value.trim();
    var city = ((_d = document.querySelector('input[name="city"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var Skills = (_e = document.getElementById('Skills')) === null || _e === void 0 ? void 0 : _e.value.trim();
    var degree = (_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value.trim();
    var university = (_g = document.getElementById('university')) === null || _g === void 0 ? void 0 : _g.value.trim();
    var graduationDate = (_h = document.getElementById('graduation-date')) === null || _h === void 0 ? void 0 : _h.value;
    var jobTitle = (_j = document.getElementById('job-title')) === null || _j === void 0 ? void 0 : _j.value.trim();
    var companyName = (_k = document.getElementById('company-name')) === null || _k === void 0 ? void 0 : _k.value.trim();
    var startDate = (_l = document.getElementById('start-date')) === null || _l === void 0 ? void 0 : _l.value;
    var endDate = (_m = document.getElementById('end-date')) === null || _m === void 0 ? void 0 : _m.value;
    if (!name || !email || !number || !city || !degree || !university || !graduationDate || !jobTitle || !companyName || !startDate || !endDate) {
        alert('Please fill in all required fields!');
        return;
    }
    var imageUpload = document.getElementById('imageUplaod');
    var imageUrl = '';
    if ((_o = imageUpload === null || imageUpload === void 0 ? void 0 : imageUpload.files) === null || _o === void 0 ? void 0 : _o.length) {
        var file = imageUpload.files[0];
        imageUrl = URL.createObjectURL(file);
    }
    var resumeContent = "  \n\n    <h1 style=\"text-align: center; font-size: 2.5em; color: #333; margin-bottom: 20px; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;\">Resume</h1>        \n    ".concat(imageUrl ? "<img src=\"".concat(imageUrl, "\" alt=\"User Image\" style=\"float:right; width:100px; height:100px; border-radius:50%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); margin: 0 0 20px 20px;\"/>") : '', "\n    <h2 style=\"color: #4a90e2; font-size: 1.8em; margin-top: 20px;\">Personal Information</h2>\n    <p><strong style=\"color: #333;\">Full Name:</strong> ").concat(name, "</p>\n    <p><strong style=\"color: #333;\">Email Address:</strong> ").concat(email, "</p>\n    <p><strong style=\"color: #333;\">Contact Number:</strong> ").concat(number, "</p>\n    <p><strong style=\"color: #333;\">City:</strong> ").concat(city, "</p>\n\n    <h2 style=\"color: #4a90e2; font-size: 1.8em; margin-top: 20px;\">Skills</h2>\n    <p><strong style=\"color: #333;\">Skills:</strong> ").concat(Skills, "</p>\n\n    <h2 style=\"color: #4a90e2; font-size: 1.8em; margin-top: 20px;\">Education</h2>\n    <p><strong style=\"color: #333;\">Degree:</strong> ").concat(degree, "</p>\n    <p><strong style=\"color: #333;\">University:</strong> ").concat(university, "</p>\n    <p><strong style=\"color: #333;\">Graduation Date:</strong> ").concat(graduationDate, "</p>\n\n    <h2 style=\"color: #4a90e2; font-size: 1.8em; margin-top: 20px;\">Work Experience</h2>\n    <p><strong style=\"color: #333;\">Job Title:</strong> ").concat(jobTitle, "</p>\n    <p><strong style=\"color: #333;\">Company Name:</strong> ").concat(companyName, "</p>\n    <p><strong style=\"color: #333;\">Start Date:</strong> ").concat(startDate, "</p>\n    <p><strong style=\"color: #333;\">End Date:</strong> ").concat(endDate, "</p>\n    \n    ");
    var resumeContainer = document.getElementById('resume-content');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeContent;
    }
    alert("Resume Generated! Your Resume Has Been Generated.");
    console.log(resumeContent);
    var formContainer = document.getElementById('form-container');
    var editButton = document.getElementById('edit-resume-btn');
    var downloadButton = document.getElementById("download-resume-btn");
    var linkButton = document.getElementById("url-resume-btn");
    if (formContainer && editButton && downloadButton && linkButton) {
        formContainer.style.display = 'none';
        editButton.style.display = 'inline-block';
        downloadButton.style.display = 'inline-block';
        linkButton.style.display = 'inline-block';
    }
}
function editResume() {
    var formContainer = document.getElementById("form-container");
    var editButton = document.getElementById("edit-resume-btn");
    if (formContainer && editButton) {
        formContainer.style.display = 'block';
        editButton.style.display = 'none';
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
// print section
(_a = document.getElementById("download-resume-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    window.print();
});
// Url section 
function shareUrl() {
    var _a;
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value.trim();
    if (!name) {
        alert("Please generate the resume first!");
        return;
    }
    var baseUrl = "https://".concat(name, ".vercel.app/resume/");
    var url = "".concat(baseUrl);
    var urlInput = document.getElementById("shareable-url");
    if (urlInput) {
        urlInput.value = url;
        urlInput.style.display = "block";
        urlInput.select();
        alert("Sharable Link Copied: ".concat(url));
    }
    else {
        console.error("URL input element not found. ");
    }
}
