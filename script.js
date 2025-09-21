// script.js

let currentYear = 1;
let currentSemester = 1;
let currentCourse = '';

const curriculum = {
    // Your curriculum object here (as per the original code)
};

function showMain() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('year-view').classList.add('hidden');
    document.getElementById('semester-view').classList.add('hidden');
    document.getElementById('course-view').classList.add('hidden');
}

function showYear(year) {
    currentYear = year;
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('year-view').classList.remove('hidden');
    document.getElementById('semester-view').classList.add('hidden');
    document.getElementById('course-view').classList.add('hidden');
    
    const yearNames = ['', 'First', 'Second', 'Third', 'Fourth'];
    document.getElementById('year-title').textContent = `${yearNames[year]} Year`;
    
    const semesterGrid = document.getElementById('semester-grid');
    semesterGrid.innerHTML = `
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer" onclick="showSemester(${year}, 1)">
            <div class="text-center">
                <div class="text-5xl mb-4">📖</div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Semester 1</h3>
                <p class="text-gray-600">${curriculum[year][1].length} Courses</p>
                <div class="mt-4 text-sm text-gray-500">
                    <p>Total Credits: ${curriculum[year][1].reduce((sum, course) => sum + course.credits, 0)}</p>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-8 card-hover cursor-pointer" onclick="showSemester(${year}, 2)">
            <div class="text-center">
                <div class="text-5xl mb-4">📚</div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Semester 2</h3>
                <p class="text-gray-600">${curriculum[year][2].length} Courses</p>
                <div class="mt-4 text-sm text-gray-500">
                    <p>Total Credits: ${curriculum[year][2].reduce((sum, course) => sum + course.credits, 0)}</p>
                </div>
            </div>
        </div>
    `;
}

// Additional JavaScript functions to handle semester and course view...
