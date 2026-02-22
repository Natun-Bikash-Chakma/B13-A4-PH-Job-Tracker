let jobs = [
    { id: 1, company: "Mobile First Corp", title: "React Native Developer", loc: "Remote", type: "Full-time", pay: "$110,000 - $135,000", desc: "Build cross-platform mobile applications using React Native. Work on complex and high-traffic projects.", status: "all" },
    { id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", loc: "Los Angeles, CA", type: "Remote", pay: "$80,000 - $100,000", desc: "Create stunning websites for high-profile clients. Must have a solid understanding of modern web design trends.", status: "all" },
    { id: 3, company: "DataViz Solutions", title: "Data Visualization Specialist", loc: "Boston, MA", type: "Full-time", pay: "$120,000 - $155,000", desc: "Transform complex data into engaging visualizations. Experience with D3.js, Figma, and strong analytical thinking.", status: "all" },
    { id: 4, company: "CloudFirst Inc", title: "Backend Developer", loc: "Seattle, WA", type: "Full-time", pay: "$140,000 - $170,000", desc: "Design and maintain scalable backend systems using Python and AWS. Work with a team of professional engineers.", status: "all" },
    { id: 5, company: "Innovation Labs", title: "UI/UX Designer", loc: "Austin, TX", type: "Full-time", pay: "$90,000 - $115,000", desc: "Design beautiful and functional user interfaces for our latest products. Strong typography and visual design skills are required.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", loc: "New York, NY", type: "Full-time", pay: "$120,000 - $150,000", desc: "Build modern web applications with React.js and Node.js. Join our fast-growing team and work on high-impact projects.", status: "all" },
    { id: 7, company: "StartupXYZ", title: "Full Stack Developer", loc: "Remote", type: "Full-time", pay: "$110,000 - $140,000", desc: "Join our fast-growing startup and work on our core platform. Experience with Python, Django, and React is required.", status: "all" },
    { id: 8, company: "TechCorp Industries", title: "Senior Frontend Developer", loc: "San Francisco, CA", type: "Full-time", pay: "$150,000 - $185,000", desc: "We are looking for an experienced Frontend Developer to lead our UI team. You will work on a mission-critical project.", status: "all" }
];

let activeFilter = 'all';

function render() {
    const container = document.getElementById('job-container');
    const filtered = jobs.filter(j => activeFilter === 'all' || j.status === activeFilter);

    // --- FINAL FIX: Dynamic Counter Logic ---
    const currentCount = filtered.length;
    const totalCount = jobs.length;
    const tabCounter = document.getElementById('tab-job-count');

    // Logic: If All tab OR if the current tab is empty, show "8 Jobs"
    // Otherwise, show "1 of 8 Job"
    if (activeFilter === 'all' || currentCount === 0) {
        tabCounter.innerText = `${totalCount} Jobs`;
    } else {
        tabCounter.innerText = `${currentCount} of ${totalCount} Job`;
    }
    // ----------------------------------------


    // Dashboard Cards Count
    document.getElementById('total-count').innerText = totalCount;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;

    // Empty State Check
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                <div class="text-5xl mb-4 opacity-30">📂</div>
                <h4 class="text-xl font-bold text-slate-700">No jobs available</h4>
                <p class="text-slate-400">Check back soon for new job opportunities</p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(job => `
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative hover:border-blue-200 transition-all group">
            <!-- Fixed SVG Path for Delete Button -->
            <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-300 hover:text-rose-500 transition-colors">
                <svg xmlns="http://www.w3.org" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
            <h4 class="text-lg font-bold text-slate-800 mb-1">${job.company}</h4>
            <p class="text-sm font-semibold text-slate-500 mb-2">${job.title}</p>
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-400 mb-3 uppercase tracking-tight">
                <span>${job.loc}</span>
                <span>•</span>
                <span>${job.type}</span>
                <span>•</span>
                <span>${job.pay}</span>
            </div>
            <div class="mb-4">
                <span class="text-[10px] font-black px-4 py-3 rounded ${job.status === 'all' ? 'bg-blue-50 text-blue-600' : job.status === 'interview' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'} uppercase tracking-widest">
                    ${job.status === 'all' ? 'Not Applied' : job.status}
                </span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">${job.desc}</p>
            <div class="flex gap-2">
                <button onclick="toggleStatus(${job.id}, 'interview')" class="px-4 py-3 text-[10px] font-black rounded border-2 transition-all ${job.status === 'interview' ? 'bg-emerald-500 text-white border-emerald-500 shadow-md' : 'text-emerald-500 border-emerald-100 hover:bg-emerald-50'} uppercase">Interview</button>
                <button onclick="toggleStatus(${job.id}, 'rejected')" class="px-4 py-3 text-[10px] font-black rounded border-2 transition-all ${job.status === 'rejected' ? 'bg-rose-500 text-white border-rose-500 shadow-md' : 'text-rose-500 border-rose-100 hover:bg-rose-50'} uppercase">Rejected</button>
            </div>
        </div>
    `).join('');
}

window.toggleStatus = (id, newStatus) => {
    jobs = jobs.map(j => {
        if (j.id === id) {
            return { ...j, status: j.status === newStatus ? 'all' : newStatus };
        }
        return j;
    });
    render();
};

window.deleteJob = (id) => {
    jobs = jobs.filter(j => j.id !== id);
    render();
};

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => {
            b.className = "tab-btn px-4 py-3 text-xs font-bold rounded bg-gray-200 text-slate-600 hover:bg-gray-300";
        });
        e.target.className = "tab-btn px-4 py-3 text-xs font-bold rounded bg-blue-600 text-white active-tab";
        activeFilter = e.target.dataset.tab;
        render();
    });
});

render();