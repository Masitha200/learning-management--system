// ===== DATA =====
var DB = {
  users: [
    { id: 1, name: 'Dr. Richard Hale', email: 'admin@meridian.edu', password: 'admin123', role: 'admin', department: 'Administration', avatar: 'RH' },
    { id: 2, name: 'Prof. Sarah Chen', email: 'sarah.chen@meridian.edu', password: 'lecturer123', role: 'lecturer', department: 'Computer Science', avatar: 'SC' },
    { id: 3, name: 'Dr. James Okonkwo', email: 'james.o@meridian.edu', password: 'lecturer123', role: 'lecturer', department: 'Mathematics', avatar: 'JO' },
    { id: 4, name: 'Emily Rodriguez', email: 'emily.r@meridian.edu', password: 'student123', role: 'student', department: 'Computer Science', avatar: 'ER' },
    { id: 5, name: 'Marcus Thompson', email: 'marcus.t@meridian.edu', password: 'student123', role: 'student', department: 'Computer Science', avatar: 'MT' },
    { id: 6, name: 'Aisha Patel', email: 'aisha.p@meridian.edu', password: 'student123', role: 'student', department: 'Mathematics', avatar: 'AP' },
    { id: 7, name: 'Lucas Fernandez', email: 'lucas.f@meridian.edu', password: 'student123', role: 'student', department: 'Computer Science', avatar: 'LF' },
    { id: 8, name: 'Dr. Nina Kovac', email: 'nina.k@meridian.edu', password: 'lecturer123', role: 'lecturer', department: 'Physics', avatar: 'NK' }
  ],
  courses: [
    { id: 1, code: 'CS301', name: 'Data Structures & Algorithms', dept: 'Computer Science', lecturerId: 2, studentIds: [4, 5, 7], credits: 4, semester: 'Fall 2024', description: 'Advanced study of data structures, algorithm design, and complexity analysis.' },
    { id: 2, code: 'CS205', name: 'Web Development', dept: 'Computer Science', lecturerId: 2, studentIds: [4, 5], credits: 3, semester: 'Fall 2024', description: 'Full-stack web development principles, frameworks, and deployment.' },
    { id: 3, code: 'MATH201', name: 'Linear Algebra', dept: 'Mathematics', lecturerId: 3, studentIds: [6, 5], credits: 3, semester: 'Fall 2024', description: 'Vectors, matrices, linear transformations, and eigenvalues.' },
    { id: 4, code: 'PHYS101', name: 'Classical Mechanics', dept: 'Physics', lecturerId: 8, studentIds: [6, 7], credits: 4, semester: 'Fall 2024', description: 'Newtonian mechanics, conservation laws, and oscillatory motion.' }
  ],
  assignments: [
    { id: 1, courseId: 1, title: 'Binary Search Tree Implementation', description: 'Implement a BST with insert, delete, search, and traversal methods. Include unit tests.', dueDate: '2025-01-15', maxPoints: 100, createdBy: 2 },
    { id: 2, courseId: 1, title: 'Graph Algorithm Analysis', description: 'Compare BFS and DFS performance on different graph types. Write a detailed report.', dueDate: '2025-01-22', maxPoints: 80, createdBy: 2 },
    { id: 3, courseId: 2, title: 'Portfolio Website Project', description: 'Build a responsive portfolio website using HTML, CSS, and JavaScript with at least 4 sections.', dueDate: '2025-01-18', maxPoints: 100, createdBy: 2 },
    { id: 4, courseId: 3, title: 'Matrix Decomposition Worksheet', description: 'Solve problems on LU, QR, and SVD decomposition. Show all work.', dueDate: '2025-01-20', maxPoints: 60, createdBy: 3 },
    { id: 5, courseId: 4, title: 'Projectile Motion Lab Report', description: 'Conduct the projectile motion experiment and submit a detailed lab report with error analysis.', dueDate: '2025-01-25', maxPoints: 80, createdBy: 8 }
  ],
  submissions: [
    { id: 1, assignmentId: 1, studentId: 4, content: 'Completed BST implementation with all required methods and 15 unit tests.', submittedAt: '2025-01-14', grade: 92, feedback: 'Excellent work. Minor optimization needed in delete method.' },
    { id: 2, assignmentId: 1, studentId: 5, content: 'BST implementation with basic functionality. Tests included.', submittedAt: '2025-01-15', grade: 78, feedback: 'Good effort. Traversal methods need review.' },
    { id: 3, assignmentId: 3, studentId: 4, content: 'Portfolio website with hero, about, projects, and contact sections. Fully responsive.', submittedAt: '2025-01-17', grade: null, feedback: null },
    { id: 4, assignmentId: 4, studentId: 6, content: 'Completed all decomposition problems with step-by-step solutions.', submittedAt: '2025-01-19', grade: 55, feedback: 'SVD section has errors. Please review.' }
  ],
  materials: [
    { id: 1, courseId: 1, title: 'BST Lecture Slides', type: 'pdf', fileName: 'bst_lecture.pdf', uploadedBy: 2, uploadedAt: '2024-12-01', size: '2.4 MB' },
    { id: 2, courseId: 1, title: 'Graph Theory Notes', type: 'pdf', fileName: 'graph_theory.pdf', uploadedBy: 2, uploadedAt: '2024-12-08', size: '3.1 MB' },
    { id: 3, courseId: 1, title: 'Sorting Algorithm Visualization', type: 'video', fileName: 'sorting_vis.mp4', uploadedBy: 2, uploadedAt: '2024-12-10', size: '45 MB' },
    { id: 4, courseId: 2, title: 'CSS Flexbox Guide', type: 'pdf', fileName: 'flexbox_guide.pdf', uploadedBy: 2, uploadedAt: '2024-12-05', size: '1.8 MB' },
    { id: 5, courseId: 2, title: 'JavaScript ES6 Reference', type: 'pdf', fileName: 'es6_ref.pdf', uploadedBy: 2, uploadedAt: '2024-12-12', size: '4.2 MB' },
    { id: 6, courseId: 3, title: 'Eigenvalue Practice Set', type: 'pdf', fileName: 'eigenvalue_practice.pdf', uploadedBy: 3, uploadedAt: '2024-12-15', size: '1.1 MB' },
    { id: 7, courseId: 4, title: 'Newton Laws Demonstration', type: 'video', fileName: 'newton_demo.mp4', uploadedBy: 8, uploadedAt: '2024-12-20', size: '120 MB' }
  ],
  departments: ['Computer Science', 'Information Technology', 'Software Engineering', 'Mathematics', 'Physics', 'Administration'],
  nextId: { users: 9, courses: 5, assignments: 6, submissions: 5, materials: 8 }
};

// ===== STATE =====
var currentUser = null;
var currentPage = 'dashboard';
var supabaseClient = null;
var supabaseEnabled = false;
var supabaseReady = false;

function loadPersistedUsers() {
  try {
    var storedUsers = localStorage.getItem('lms-users');
    if (storedUsers) {
      var parsed = JSON.parse(storedUsers);
      if (Array.isArray(parsed) && parsed.length) {
        DB.users = parsed.map(normalizeUser);
      }
    }
  } catch (e) {
    console.warn('Could not load persisted users', e);
  }
}

function loadPersistedDepartments() {
  try {
    var storedDepts = localStorage.getItem('lms-departments');
    if (storedDepts) {
      var parsed = JSON.parse(storedDepts);
      if (Array.isArray(parsed) && parsed.length) {
        DB.departments = parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load persisted departments', e);
  }
}

function saveDepartmentsToStorage() {
  try {
    localStorage.setItem('lms-departments', JSON.stringify(DB.departments));
  } catch (e) {
    console.warn('Could not save departments to storage', e);
  }
}

function getDepartmentOptionsHTML(selectedValue) {
  var html = '<option value="">-- Select Department --</option>';
  var list = DB.departments || ['Computer Science', 'Information Technology', 'Software Engineering', 'Mathematics', 'Physics', 'Administration'];
  for (var i = 0; i < list.length; i++) {
    var d = list[i];
    html += '<option value="' + escAttr(d) + '"' + (d === selectedValue ? ' selected' : '') + '>' + escAttr(d) + '</option>';
  }
  return html;
}

loadPersistedUsers();
loadPersistedDepartments();

var SUPABASE_URL = (window.LMS_SUPABASE_CONFIG && window.LMS_SUPABASE_CONFIG.url) ? window.LMS_SUPABASE_CONFIG.url : '';
var SUPABASE_ANON_KEY = (window.LMS_SUPABASE_CONFIG && window.LMS_SUPABASE_CONFIG.anonKey) ? window.LMS_SUPABASE_CONFIG.anonKey : '';

function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.indexOf('YOUR_') === -1 && SUPABASE_ANON_KEY.indexOf('YOUR_') === -1);
}

function normalizeUser(row) {
  var seededEmails = [
    'admin@meridian.edu',
    'sarah.chen@meridian.edu',
    'james.o@meridian.edu',
    'emily.r@meridian.edu',
    'marcus.t@meridian.edu',
    'aisha.p@meridian.edu',
    'lucas.f@meridian.edu',
    'nina.k@meridian.edu'
  ];
  var isSeeded = row.email && seededEmails.indexOf(row.email.toLowerCase()) !== -1;

  var localApproved = false;
  try {
    var approvals = localStorage.getItem('lms-approved-emails');
    if (approvals) {
      var arr = JSON.parse(approvals);
      if (Array.isArray(arr) && row.email && arr.indexOf(row.email.toLowerCase()) !== -1) {
        localApproved = true;
      }
    }
  } catch (e) { }

  return {
    id: row.id,
    name: row.name,
    email: row.email,
    password: row.password,
    role: row.role,
    department: row.department || '',
    avatar: row.avatar || (row.name || '').split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase(),
    profilePic: row.profilePic || row.profile_pic || null,
    isApproved: (isSeeded || row.role === 'admin') ? true : (row.is_approved === true || row.is_approved === 1 || row.isApproved === true || localApproved),
    indexNumber: row.index_number || row.indexNumber || ''
  };
}

function normalizeCourse(row) {
  return {
    id: row.id,
    code: row.code,
    name: row.name,
    dept: row.dept || row.department || '',
    lecturerId: row.lecturer_id || row.lecturerId,
    studentIds: row.student_ids || row.studentIds || [],
    credits: row.credits || 0,
    semester: row.semester || '',
    description: row.description || ''
  };
}

function normalizeAssignment(row) {
  return {
    id: row.id,
    courseId: row.course_id || row.courseId,
    title: row.title,
    description: row.description,
    dueDate: row.due_date || row.dueDate,
    maxPoints: row.max_points || row.maxPoints,
    createdBy: row.created_by || row.createdBy,
    submissionType: row.submission_type || row.submissionType || 'text'
  };
}

function normalizeSubmission(row) {
  return {
    id: row.id,
    assignmentId: row.assignment_id || row.assignmentId,
    studentId: row.student_id || row.studentId,
    content: row.content,
    submittedAt: row.submitted_at || row.submittedAt,
    grade: row.grade,
    feedback: row.feedback
  };
}

function normalizeMaterial(row) {
  return {
    id: row.id,
    courseId: row.course_id || row.courseId,
    title: row.title,
    type: row.type,
    fileName: row.file_name || row.fileName,
    uploadedBy: row.uploaded_by || row.uploadedBy,
    uploadedAt: row.uploaded_at || row.uploadedAt,
    size: row.size
  };
}

async function initializeSupabase() {
  if (!window.supabase) {
    showToast('Supabase client library not loaded', 'error');
    return false;
  }
  if (!isSupabaseConfigured()) {
    showToast('Add your Supabase URL and anon key to connect the app', 'error');
    return false;
  }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  supabaseEnabled = true;
  try {
    var hasSeededInBrowser = localStorage.getItem('lms-seeded-v2') === 'true';
    var userResult = await supabaseClient.from('users').select('*').limit(1);
    if (userResult.error && userResult.error.code !== 'PGRST116') {
      console.warn('Supabase users table is not ready yet:', userResult.error.message);
      showToast('Supabase connection failed: ' + (userResult.error.message || 'Unauthorized'), 'error');
      supabaseEnabled = false;
      return false;
    }

    var [usersData, coursesData, assignmentsData, submissionsData, materialsData] = await Promise.all([
      supabaseClient.from('users').select('*').order('id'),
      supabaseClient.from('courses').select('*').order('id'),
      supabaseClient.from('assignments').select('*').order('id'),
      supabaseClient.from('submissions').select('*').order('id'),
      supabaseClient.from('materials').select('*').order('id')
    ]);

    // Self-healing seeding for individual tables if they are empty
    if (!usersData.error) {
      if ((!usersData.data || usersData.data.length === 0) && !hasSeededInBrowser) {
        console.log('Users table empty. Seeding initial users...');
        var usersToInsert = DB.users.map(function (u) {
          return { id: u.id, name: u.name, email: u.email, password: u.password, role: u.role, department: u.department, avatar: u.avatar, is_approved: true };
        });
        await supabaseClient.from('users').insert(usersToInsert);
        var ref = await supabaseClient.from('users').select('*').order('id');
        if (!ref.error && ref.data) usersData.data = ref.data;
      }
      DB.users = usersData.data.map(normalizeUser);
    }

    if (!coursesData.error) {
      if ((!coursesData.data || coursesData.data.length === 0) && !hasSeededInBrowser) {
        console.log('Courses table empty. Seeding initial courses...');
        var coursesToInsert = DB.courses.map(function (c) {
          return { id: c.id, code: c.code, name: c.name, dept: c.dept, lecturer_id: c.lecturerId, student_ids: c.studentIds, credits: c.credits, semester: c.semester, description: c.description };
        });
        await supabaseClient.from('courses').insert(coursesToInsert);
        var ref = await supabaseClient.from('courses').select('*').order('id');
        if (!ref.error && ref.data) coursesData.data = ref.data;
      }
      DB.courses = coursesData.data.map(normalizeCourse);
    }

    if (!assignmentsData.error) {
      if ((!assignmentsData.data || assignmentsData.data.length === 0) && !hasSeededInBrowser) {
        console.log('Assignments table empty. Seeding initial assignments...');
        var assignmentsToInsert = DB.assignments.map(function (a) {
          return { id: a.id, course_id: a.courseId, title: a.title, description: a.description, due_date: a.dueDate, max_points: a.maxPoints, created_by: a.createdBy };
        });
        await supabaseClient.from('assignments').insert(assignmentsToInsert);
        var ref = await supabaseClient.from('assignments').select('*').order('id');
        if (!ref.error && ref.data) assignmentsData.data = ref.data;
      }
      DB.assignments = assignmentsData.data.map(normalizeAssignment);
    }

    if (!submissionsData.error) {
      if ((!submissionsData.data || submissionsData.data.length === 0) && !hasSeededInBrowser) {
        console.log('Submissions table empty. Seeding initial submissions...');
        var submissionsToInsert = DB.submissions.map(function (s) {
          return { id: s.id, assignment_id: s.assignmentId, student_id: s.studentId, content: s.content, submitted_at: s.submittedAt, grade: s.grade, feedback: s.feedback };
        });
        if (submissionsToInsert.length > 0) {
          await supabaseClient.from('submissions').insert(submissionsToInsert);
        }
        var ref = await supabaseClient.from('submissions').select('*').order('id');
        if (!ref.error && ref.data) submissionsData.data = ref.data;
      }
      DB.submissions = submissionsData.data.map(normalizeSubmission);
    }

    if (!materialsData.error) {
      if ((!materialsData.data || materialsData.data.length === 0) && !hasSeededInBrowser) {
        console.log('Materials table empty. Seeding initial materials...');
        var materialsToInsert = DB.materials.map(function (m) {
          return { id: m.id, course_id: m.courseId, title: m.title, type: m.type, file_name: m.fileName, uploaded_by: m.uploadedBy, uploaded_at: m.uploadedAt, size: m.size };
        });
        if (materialsToInsert.length > 0) {
          await supabaseClient.from('materials').insert(materialsToInsert);
        }
        var ref = await supabaseClient.from('materials').select('*').order('id');
        if (!ref.error && ref.data) materialsData.data = ref.data;
      }
      DB.materials = materialsData.data.map(normalizeMaterial);
    }

    try {
      var deptsData = await supabaseClient.from('departments').select('*').order('name');
      if (!deptsData.error && deptsData.data) {
        if (deptsData.data.length > 0) {
          DB.departments = deptsData.data.map(function (d) { return d.name; });
        } else {
          var initialDepts = DB.departments.map(function (d) { return { name: d }; });
          await supabaseClient.from('departments').insert(initialDepts);
        }
      }
    } catch (err) {
      console.warn('Departments table on Supabase is not ready yet:', err);
    }

    if (DB.users.length) DB.nextId.users = Math.max.apply(Math, DB.users.map(function (u) { return u.id; })) + 1;
    if (DB.courses.length) DB.nextId.courses = Math.max.apply(Math, DB.courses.map(function (c) { return c.id; })) + 1;
    if (DB.assignments.length) DB.nextId.assignments = Math.max.apply(Math, DB.assignments.map(function (a) { return a.id; })) + 1;
    if (DB.submissions.length) DB.nextId.submissions = Math.max.apply(Math, DB.submissions.map(function (s) { return s.id; })) + 1;
    if (DB.materials.length) DB.nextId.materials = Math.max.apply(Math, DB.materials.map(function (m) { return m.id; })) + 1;

    localStorage.setItem('lms-seeded-v2', 'true');
    supabaseReady = true;
    showToast('Connected to Supabase', 'success');
    return true;
  } catch (err) {
    console.warn('Supabase connection failed:', err);
    showToast('Supabase connection failed: ' + (err && err.message ? err.message : 'Check your credentials'), 'error');
    supabaseEnabled = false;
    return false;
  }
}

async function syncUserToSupabase(user) {
  if (!supabaseEnabled || !supabaseClient) return;
  try {
    var { error } = await supabaseClient.from('users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      department: user.department,
      avatar: user.avatar,
      is_approved: user.isApproved !== false,
      index_number: user.indexNumber || ''
    });
    if (error) {
      console.warn('Supabase insert failed, attempting fallback insertion:', error.message);
      await supabaseClient.from('users').insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        department: user.department,
        avatar: user.avatar,
        is_approved: user.isApproved !== false
      });
    }
  } catch (err) {
    console.warn('Unable to sync user to Supabase:', err);
  }
}

async function syncMaterialToSupabase(material) {
  if (!supabaseEnabled || !supabaseClient) return;
  await supabaseClient.from('materials').insert({
    id: material.id,
    course_id: material.courseId,
    title: material.title,
    type: material.type,
    file_name: material.fileName,
    uploaded_by: material.uploadedBy,
    uploaded_at: material.uploadedAt,
    size: material.size
  });
}

// ===== HELPERS =====
function showToast(msg, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  var bgColor = type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--accent)';
  var icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
  var el = document.createElement('div');
  el.className = 'toast';
  el.style.background = bgColor;
  el.innerHTML = '<i class="fas ' + icon + '"></i><span>' + msg + '</span>';
  container.appendChild(el);
  setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 3000);
}

function showModal(title, bodyHtml, footerHtml) {
  var mc = document.getElementById('modal-container');
  footerHtml = footerHtml || '';
  mc.innerHTML = '<div class="modal-overlay" id="modal-overlay">' +
    '<div class="modal-content">' +
    '<div class="p-6" style="border-bottom:1px solid var(--border);">' +
    '<div class="flex items-center justify-between"><h3 class="text-lg font-bold">' + title + '</h3>' +
    '<button id="modal-close-btn" class="text-gray-400 hover:text-white transition" style="background:none;border:none;cursor:pointer;font-size:16px;"><i class="fas fa-times"></i></button></div>' +
    '</div>' +
    '<div class="p-6">' + bodyHtml + '</div>' +
    (footerHtml ? '<div class="p-6 pt-0 flex justify-end gap-3">' + footerHtml + '</div>' : '') +
    '</div></div>';
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target.id === 'modal-overlay') closeModal();
  });
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

function formatDate(d) {
  if (!d) return 'N/A';
  var parts = d.split('-');
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[parseInt(parts[1], 10) - 1] + ' ' + parseInt(parts[2], 10) + ', ' + parts[0];
}

function roleBadge(role) {
  return '<span class="badge badge-' + role + '">' + role.charAt(0).toUpperCase() + role.slice(1) + '</span>';
}

function avatarClass(role) {
  return 'avatar-' + role;
}

function renderUserAvatar(target, user, sizeClass) {
  if (!target) return;
  var safeSize = sizeClass || 'w-9 h-9';
  target.className = safeSize + ' rounded-full flex items-center justify-center text-xs font-bold overflow-hidden ' + avatarClass(user && user.role ? user.role : 'student');
  if (user && user.profilePic) {
    target.innerHTML = '<img src="' + escAttr(user.profilePic) + '" alt="' + escAttr(user.name || 'Profile') + '" class="w-full h-full object-cover">';
  } else {
    target.textContent = user && user.avatar ? user.avatar : '?';
  }
}

function saveUsersToStorage() {
  try {
    localStorage.setItem('lms-users', JSON.stringify(DB.users));
  } catch (e) {
    console.warn('Could not save users to storage', e);
  }
}

function renderSettingsPage() {
  var previewHtml = currentUser.profilePic
    ? '<img id="profile-photo-preview" data-image="' + escAttr(currentUser.profilePic) + '" src="' + escAttr(currentUser.profilePic) + '" alt="Profile preview" class="w-24 h-24 rounded-full object-cover border-2 border-gold-500">'
    : '<div id="profile-photo-preview" data-image="" class="w-24 h-24 rounded-full flex items-center justify-center text-xl font-bold border-2 border-gold-500 ' + avatarClass(currentUser.role) + '">' + escAttr(currentUser.avatar || '?') + '</div>';

  var isUserAdmin = currentUser.role === 'admin';
  var disabledAttr = !isUserAdmin ? ' disabled style="opacity: 0.65; cursor: not-allowed; background: rgba(255,255,255,0.015);"' : '';

  var deptsHtml = '';
  if (isUserAdmin) {
    var depts = DB.departments || [];
    for (var i = 0; i < depts.length; i++) {
      var d = depts[i];
      deptsHtml += '<tr><td class="font-medium">' + escAttr(d) + '</td>' +
        '<td style="text-align:right;"><button class="btn-danger text-xs" style="padding:6px 12px;" onclick="deleteDepartmentAction(\'' + escAttr(d) + '\')"><i class="fas fa-trash mr-1"></i>Delete</button></td></tr>';
    }
    if (depts.length === 0) {
      deptsHtml = '<tr><td colspan="2" class="text-center text-sm" style="color:var(--fg-muted); padding: 12px 16px;">No departments registered yet.</td></tr>';
    }
  }

  var html = '<div class="space-y-6">' +
    '<div class="card p-6">' +
    '<div class="flex flex-col md:flex-row gap-6 items-start">' +
    '<div class="flex flex-col items-center md:items-start gap-3">' + previewHtml +
    '<label for="profile-photo-input" class="btn-secondary text-sm cursor-pointer"><i class="fas fa-camera mr-2"></i>Change Photo</label>' +
    '<button type="button" id="remove-profile-photo" class="btn-secondary text-sm"><i class="fas fa-trash mr-2"></i>Remove Photo</button>' +
    '<input id="profile-photo-input" type="file" accept="image/*" class="hidden"></div>' +
    '<div class="flex-1 w-full">' +
    '<h3 class="text-xl font-bold mb-2">My Profile</h3>' +
    '<p class="text-sm mb-6" style="color:var(--fg-muted);">Update your email' + (isUserAdmin ? ', password, department,' : '') + ' and profile image here.</p>' +
    '<form id="profile-settings-form" class="space-y-4">' +
    '<div class="grid md:grid-cols-2 gap-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Full Name</label><input id="profile-name" class="input-field" value="' + escAttr(currentUser.name) + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Email</label><input id="profile-email" type="email" class="input-field" value="' + escAttr(currentUser.email) + '"></div>' +
    '</div>' +
    '<div class="grid md:grid-cols-2 gap-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Department</label><select id="profile-department" class="input-field"' + disabledAttr + '>' + getDepartmentOptionsHTML(currentUser.department || '') + '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">New Password</label><input id="profile-password" type="password" class="input-field"' + disabledAttr + ' placeholder="' + (isUserAdmin ? 'Leave blank to keep current password' : 'Only admins can change password') + '"></div>' +
    '</div>' +
    (!isUserAdmin ? '<div class="rounded-lg p-3 text-sm" style="background:rgba(255,64,129,0.06); color:var(--fg-muted); border: 1px solid rgba(255,64,129,0.15);"><i class="fas fa-info-circle mr-1.5" style="color:var(--accent-hover);"></i>Lecturers and students are not permitted to change their department or password here. Please contact an administrator.</div>' : '<div class="rounded-lg p-3 text-sm" style="background:rgba(244,211,103,0.08); color:var(--fg-muted);">You can select your department from the dropdown list.</div>') +
    '<div class="flex justify-end gap-3 pt-2">' +
    '<button type="button" class="btn-secondary" onclick="navigateTo(\'dashboard\')">Cancel</button>' +
    '<button type="submit" class="btn-primary">Save Changes</button>' +
    '</div>' +
    '</form></div></div></div>';

  if (isUserAdmin) {
    html += '<div class="card p-6">' +
      '<h3 class="text-xl font-bold mb-2">Manage Departments</h3>' +
      '<p class="text-sm mb-6" style="color:var(--fg-muted);">Pre-create academic and administration departments here.</p>' +
      '<div class="flex gap-3 mb-6">' +
      '<input id="new-dept-name" class="input-field" placeholder="Enter department name (e.g. Civil Engineering)">' +
      '<button class="btn-primary flex-shrink-0" onclick="addDepartmentAction()"><i class="fas fa-plus mr-2"></i>Add Department</button>' +
      '</div>' +
      '<div class="overflow-x-auto"><table>' +
      '<thead><tr><th>Department Name</th><th style="text-align:right;">Actions</th></tr></thead>' +
      '<tbody>' + deptsHtml + '</tbody>' +
      '</table></div></div>';
  }

  html += '</div>';
  return html;
}

window.addDepartmentAction = async function () {
  var input = document.getElementById('new-dept-name');
  if (!input) return;
  var name = input.value.trim();
  if (!name) { showToast('Department name is required', 'error'); return; }
  if (DB.departments.indexOf(name) !== -1) { showToast('Department already exists', 'error'); return; }

  DB.departments.push(name);
  saveDepartmentsToStorage();

  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('departments').insert({ name: name });
    } catch (e) {
      console.warn('Could not sync new department to Supabase', e);
    }
  }

  input.value = '';
  showToast('Department added successfully', 'success');
  navigateTo('settings');
};

window.deleteDepartmentAction = async function (name) {
  if (!confirm('Are you sure you want to delete the department "' + name + '"?')) return;
  DB.departments = DB.departments.filter(function (d) { return d !== name; });
  saveDepartmentsToStorage();

  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('departments').delete().eq('name', name);
    } catch (e) {
      console.warn('Could not delete department from Supabase', e);
    }
  }

  showToast('Department deleted', 'success');
  navigateTo('settings');
};

function handleProfilePictureSelect(event) {
  var file = event.target.files && event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    var preview = document.getElementById('profile-photo-preview');
    if (preview) {
      preview.setAttribute('data-image', e.target.result);
      if (preview.tagName === 'IMG') {
        preview.src = e.target.result;
      } else {
        preview.innerHTML = '<img src="' + escAttr(e.target.result) + '" alt="Profile preview" class="w-full h-full rounded-full object-cover">';
      }
    }
  };
  reader.readAsDataURL(file);
}

function removeProfilePicture() {
  var preview = document.getElementById('profile-photo-preview');
  if (!preview) return;
  preview.setAttribute('data-image', '');
  preview.className = 'w-24 h-24 rounded-full flex items-center justify-center text-xl font-bold border-2 border-gold-500 ' + avatarClass(currentUser.role);
  preview.textContent = currentUser.avatar || '?';
}

async function saveProfileSettings() {
  var name = document.getElementById('profile-name').value.trim();
  var email = document.getElementById('profile-email').value.trim();
  var preview = document.getElementById('profile-photo-preview');
  var profilePic = preview ? preview.getAttribute('data-image') : currentUser.profilePic || null;

  if (!name || !email) {
    showToast('Name and email are required', 'error');
    return;
  }

  var user = DB.users.find(function (u) { return u.id === currentUser.id; });
  if (!user) return;

  var isUserAdmin = currentUser.role === 'admin';

  user.name = name;
  user.email = email;
  user.profilePic = profilePic;
  user.avatar = name.split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase();

  if (isUserAdmin) {
    var department = document.getElementById('profile-department').value.trim();
    var password = document.getElementById('profile-password').value;
    user.department = department;
    user.password = password ? password : user.password;
  }

  currentUser.name = user.name;
  currentUser.email = user.email;
  currentUser.profilePic = user.profilePic;
  currentUser.avatar = user.avatar;

  if (isUserAdmin) {
    currentUser.department = user.department;
    currentUser.password = user.password;
  }

  saveUsersToStorage();

  if (supabaseEnabled && supabaseClient) {
    try {
      var updatePayload = {
        name: user.name,
        email: user.email,
        avatar: user.avatar
      };
      if (isUserAdmin) {
        updatePayload.department = user.department;
        updatePayload.password = user.password;
      }
      await supabaseClient.from('users').update(updatePayload).eq('id', user.id);
    } catch (err) {
      console.warn('Unable to sync profile settings to Supabase', err);
    }
  }

  buildSidebar();
  renderUserAvatar(document.getElementById('user-avatar'), currentUser, 'w-9 h-9');
  document.getElementById('user-name').textContent = currentUser.name;
  document.getElementById('user-role').textContent = currentUser.role;
  showToast('Profile updated successfully');
  navigateTo('dashboard');
}

function getCourse(id) { return DB.courses.find(function (c) { return c.id === id; }); }
function getUser(id) { return DB.users.find(function (u) { return u.id === id; }); }
function getAssignment(id) { return DB.assignments.find(function (a) { return a.id === id; }); }

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function authenticateWithSupabase(email, password) {
  if (!supabaseEnabled || !supabaseClient) return null;
  try {
    var { data, error } = await supabaseClient.from('users').select('*').eq('email', email).limit(1);
    if (error) throw error;
    if (!data || !data.length) return null;
    var row = data[0];
    return row.password === password ? normalizeUser(row) : null;
  } catch (err) {
    console.warn('Supabase authentication failed:', err);
    return null;
  }
}

// ===== AUTH =====
async function handleLogin() {
  var email = document.getElementById('login-email').value.trim();
  var password = document.getElementById('login-password').value.trim();
  var errEl = document.getElementById('login-error');
  if (!email || !password) {
    errEl.textContent = 'Please fill in all fields';
    errEl.style.display = 'block';
    return;
  }

  var user = null;
  if (supabaseEnabled && supabaseClient) {
    user = await authenticateWithSupabase(email, password);
  }

  if (!user) {
    user = DB.users.find(function (u) { return u.email === email && u.password === password; });
  }

  if (!user) {
    errEl.textContent = 'Invalid email or password';
    errEl.style.display = 'block';
    return;
  }

  if (user.isApproved === false) {
    errEl.textContent = 'Your account is pending admin approval';
    errEl.style.display = 'block';
    return;
  }

  errEl.style.display = 'none';
  loginAs(user);
}

async function handleRegister() {
  var name = document.getElementById('register-name').value.trim();
  var email = document.getElementById('register-email').value.trim();
  var password = document.getElementById('register-password').value.trim();
  var dept = document.getElementById('register-dept').value.trim();
  var role = document.getElementById('register-role').value;
  var errEl = document.getElementById('register-error');

  if (!name || !email || !password || !dept) {
    errEl.textContent = 'Please fill in all fields';
    errEl.style.display = 'block';
    return;
  }

  if (email.indexOf('@') === -1) {
    errEl.textContent = 'Please enter a valid email address';
    errEl.style.display = 'block';
    return;
  }

  var indexNum = '';
  if (role === 'student') {
    indexNum = document.getElementById('register-index').value.trim();
    if (!indexNum) {
      errEl.textContent = 'Please enter your Index Number';
      errEl.style.display = 'block';
      return;
    }
  }

  errEl.style.display = 'none';

  var exists = DB.users.some(function (u) { return u.email.toLowerCase() === email.toLowerCase(); });
  if (exists) {
    errEl.textContent = 'Email is already registered';
    errEl.style.display = 'block';
    return;
  }

  var avatar = name.split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  var newUser = {
    id: DB.nextId.users++,
    name: name,
    email: email,
    password: password,
    role: role,
    department: dept,
    avatar: avatar,
    is_approved: false,
    index_number: indexNum
  };

  if (supabaseEnabled && supabaseClient) {
    try {
      var { error } = await supabaseClient.from('users').insert({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        role: newUser.role,
        department: newUser.department,
        avatar: newUser.avatar,
        is_approved: false,
        index_number: indexNum
      });
      if (error) {
        console.warn('Reg insert failed, attempting fallback insertion:', error.message);
        await supabaseClient.from('users').insert({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          role: newUser.role,
          department: newUser.department,
          avatar: newUser.avatar,
          is_approved: false
        });
      }
    } catch (err) {
      console.warn('Supabase registration failed, falling back:', err);
    }
  }

  DB.users.push(normalizeUser(newUser));
  saveUsersToStorage();

  showToast('Registration submitted! Awaiting admin approval.', 'success');

  document.getElementById('register-name').value = '';
  document.getElementById('register-email').value = '';
  document.getElementById('register-password').value = '';
  document.getElementById('register-index').value = '';

  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('signin-form').style.display = 'block';
  document.getElementById('signin-form').classList.remove('hidden');
  document.getElementById('auth-title').textContent = 'Sign In';
}



function loginAs(user) {
  currentUser = user;
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('app-page').style.display = 'flex';
  document.getElementById('app-page').classList.remove('hidden');
  document.getElementById('user-name').textContent = user.name;
  document.getElementById('user-role').textContent = user.role;
  renderUserAvatar(document.getElementById('user-avatar'), user, 'w-9 h-9');
  document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  buildSidebar();
  navigateTo('dashboard');
}

function handleLogout() {
  currentUser = null;
  document.getElementById('app-page').style.display = 'none';
  document.getElementById('app-page').classList.add('hidden');
  document.getElementById('login-page').style.display = 'flex';
  document.getElementById('login-page').classList.remove('hidden');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}

// ===== SIDEBAR =====
function buildSidebar() {
  var nav = document.getElementById('sidebar-nav');
  var links = [];
  if (currentUser.role === 'admin') {
    links = [
      { id: 'dashboard', icon: 'fa-th-large', label: 'Dashboard' },
      { id: 'users', icon: 'fa-users', label: 'User Management' },
      { id: 'roles', icon: 'fa-user-shield', label: 'Roles & Permissions' },
      { id: 'courses', icon: 'fa-book', label: 'Course Management' },
      { id: 'all-assignments', icon: 'fa-tasks', label: 'Assignments' },
      { id: 'all-materials', icon: 'fa-folder-open', label: 'Materials' },
      { id: 'settings', icon: 'fa-cog', label: 'Settings' }
    ];
  } else if (currentUser.role === 'lecturer') {
    links = [
      { id: 'dashboard', icon: 'fa-th-large', label: 'Dashboard' },
      { id: 'my-courses', icon: 'fa-book', label: 'My Courses' },
      { id: 'assignments', icon: 'fa-tasks', label: 'Assignments' },
      { id: 'materials', icon: 'fa-folder-open', label: 'Materials' },
      { id: 'submissions', icon: 'fa-paper-plane', label: 'Submissions' }
    ];
    links.push({ id: 'settings', icon: 'fa-cog', label: 'Settings' });
  } else {
    links = [
      { id: 'dashboard', icon: 'fa-th-large', label: 'Dashboard' },
      { id: 'my-courses', icon: 'fa-book', label: 'My Courses' },
      { id: 'assignments', icon: 'fa-tasks', label: 'Assignments' },
      { id: 'materials', icon: 'fa-download', label: 'Materials' },
      { id: 'submissions', icon: 'fa-paper-plane', label: 'My Submissions' },
      { id: 'my-grades', icon: 'fa-chart-bar', label: 'My Grades' }
    ];
    links.push({ id: 'settings', icon: 'fa-cog', label: 'Settings' });
  }
  var html = '';
  for (var i = 0; i < links.length; i++) {
    html += '<a href="#" class="sidebar-link" data-page="' + links[i].id + '">' +
      '<i class="fas ' + links[i].icon + '" style="width:20px;text-align:center;"></i>' +
      links[i].label + '</a>';
  }
  nav.innerHTML = html;
  var allLinks = nav.querySelectorAll('.sidebar-link');
  for (var j = 0; j < allLinks.length; j++) {
    allLinks[j].addEventListener('click', function (e) {
      e.preventDefault();
      navigateTo(this.getAttribute('data-page'));
    });
  }
}

function navigateTo(page) {
  currentPage = page;

  // Close mobile sidebar drawer on navigation
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');

  var allLinks = document.querySelectorAll('.sidebar-link');
  for (var i = 0; i < allLinks.length; i++) {
    if (allLinks[i].getAttribute('data-page') === page) {
      allLinks[i].classList.add('active');
    } else {
      allLinks[i].classList.remove('active');
    }
  }
  renderPage();
}

// ===== PAGE ROUTER =====
function renderPage() {
  var mc = document.getElementById('main-content');
  var pt = document.getElementById('page-title');
  var ps = document.getElementById('page-subtitle');
  var r = currentUser.role;
  var html = '';
  var title = '';
  var subtitle = '';

  switch (currentPage) {
    case 'dashboard':
      title = 'Dashboard';
      subtitle = 'Welcome back, ' + currentUser.name;
      html = r === 'admin' ? renderAdminDashboard() : r === 'lecturer' ? renderLecturerDashboard() : renderStudentDashboard();
      break;
    case 'users':
      title = 'User Management';
      subtitle = 'Manage all system users';
      html = renderUsers();
      break;
    case 'roles':
      title = 'Roles & Permissions';
      subtitle = 'Assign and modify user roles';
      html = renderRoles();
      break;
    case 'courses':
      title = 'Course Management';
      subtitle = 'Manage all university courses';
      html = renderCoursesAdmin();
      break;
    case 'settings':
      title = 'Settings';
      subtitle = 'Update your profile and photo';
      html = renderSettingsPage();
      break;
    case 'my-courses':
      title = 'My Courses';
      subtitle = 'Courses you are enrolled in';
      html = renderMyCourses();
      break;
    case 'assignments':
      title = 'Assignments';
      subtitle = r === 'lecturer' ? 'Create and manage assignments' : 'View and submit assignments';
      html = r === 'lecturer' ? renderLecturerAssignments() : renderStudentAssignments();
      break;
    case 'all-assignments':
      title = 'All Assignments';
      subtitle = 'View assignments across all courses';
      html = renderAllAssignments();
      break;
    case 'materials':
      title = 'Course Materials';
      subtitle = r === 'lecturer' ? 'Upload and manage course materials' : 'Download course materials';
      html = r === 'lecturer' ? renderLecturerMaterials() : renderStudentMaterials();
      break;
    case 'all-materials':
      title = 'All Materials';
      subtitle = 'View materials across all courses';
      html = renderAllMaterials();
      break;
    case 'submissions':
      title = currentUser.role === 'lecturer' ? 'Submissions' : 'My Submissions';
      subtitle = currentUser.role === 'lecturer' ? 'Review student submissions' : 'View your submitted assignments';
      html = currentUser.role === 'lecturer' ? renderSubmissions() : renderStudentSubmissions();
      break;
    case 'my-grades':
      title = 'My Grades';
      subtitle = 'View your assignment grades';
      html = renderMyGrades();
      break;
    default:
      html = '<p>Page not found.</p>';
  }

  pt.textContent = title;
  ps.textContent = subtitle;
  mc.innerHTML = html;
  if (currentPage === 'settings') {
    var photoInput = document.getElementById('profile-photo-input');
    if (photoInput) photoInput.addEventListener('change', handleProfilePictureSelect);
    var removePhotoBtn = document.getElementById('remove-profile-photo');
    if (removePhotoBtn) removePhotoBtn.addEventListener('click', removeProfilePicture);
    var settingsForm = document.getElementById('profile-settings-form');
    if (settingsForm) settingsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      saveProfileSettings();
    });
  }
  attachPageListeners();
}

// ===== Attach event listeners after rendering =====
var pageActionListenerAttached = false;

function attachPageListeners() {
  if (pageActionListenerAttached) return;
  document.addEventListener('click', handleAction);
  pageActionListenerAttached = true;
}

function handleAction(e) {
  var btn = e.target.closest('[data-action]');
  if (!btn) return;
  var action = btn.getAttribute('data-action');
  var id = parseInt(btn.getAttribute('data-id')) || 0;

  switch (action) {
    case 'add-user': openAddUserModal(); break;
    case 'edit-user': openEditUserModal(id); break;
    case 'delete-user': confirmDeleteUser(id); break;
    case 'approve-user': approveUser(id); break;
    case 'add-course': openAddCourseModal(); break;
    case 'edit-course': openEditCourseModal(id); break;
    case 'delete-course': confirmDeleteCourse(id); break;
    case 'add-assignment': openAddAssignmentModal(); break;
    case 'edit-assignment': openEditAssignmentModal(id); break;
    case 'delete-assignment': confirmDeleteAssignment(id); break;
    case 'submit-assignment': openSubmitModal(id); break;
    case 'resubmit-assignment': openResubmitModal(id); break;
    case 'add-material': openAddMaterialModal(); break;
    case 'delete-material': confirmDeleteMaterial(id); break;
    case 'download-material': downloadMaterial(id); break;
    case 'grade-submission': openGradeModal(id); break;
    case 'view-submission': openViewSubmissionModal(id); break;
    case 'assign-role': applyRole(id); break;
    case 'save-user': saveUser(); break;
    case 'save-edit-user': saveEditUser(); break;
    case 'save-course': saveCourse(); break;
    case 'save-edit-course': saveEditCourse(); break;
    case 'save-assignment': saveAssignment(); break;
    case 'save-edit-assignment': saveEditAssignment(); break;
    case 'save-submission': saveSubmission(); break;
    case 'save-resubmission': saveResubmission(); break;
    case 'save-material': saveMaterial(); break;
    case 'save-grade': saveGrade(); break;
  }
}

async function approveUser(id) {
  var u = DB.users.find(function (x) { return x.id === id; });
  if (!u) return;
  u.isApproved = true;

  try {
    var approvalsStr = localStorage.getItem('lms-approved-emails');
    var approvalsArr = approvalsStr ? JSON.parse(approvalsStr) : [];
    if (!Array.isArray(approvalsArr)) approvalsArr = [];
    if (u.email && approvalsArr.indexOf(u.email.toLowerCase()) === -1) {
      approvalsArr.push(u.email.toLowerCase());
      localStorage.setItem('lms-approved-emails', JSON.stringify(approvalsArr));
    }
  } catch (e) {
    console.warn('Could not save email approval override', e);
  }

  if (supabaseEnabled && supabaseClient) {
    try {
      var { error } = await supabaseClient.from('users').update({ is_approved: true }).eq('id', id);
      if (error) {
        console.warn('Supabase update failed, attempting fallback query:', error.message);
      }
    } catch (err) {
      console.warn('Could not sync approval to Supabase:', err);
    }
  }
  saveUsersToStorage();
  showToast('Account approved successfully', 'success');
  renderPage();
}

// ===== STAT CARD =====
function statCard(icon, iconBg, iconColor, value, label) {
  return '<div class="card p-6"><div class="flex items-center gap-4">' +
    '<div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background:' + iconBg + ';">' +
    '<i class="fas ' + icon + ' text-lg" style="color:' + iconColor + ';"></i></div>' +
    '<div><p class="text-2xl font-bold">' + value + '</p>' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + label + '</p></div></div></div>';
}

// ===== ADMIN DASHBOARD =====
function renderAdminDashboard() {
  var html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">';
  html += statCard('fa-users', 'rgba(0, 242, 254, 0.12)', '#00f2fe', DB.users.length, 'Total Users');
  html += statCard('fa-book', 'rgba(124, 77, 255, 0.12)', '#b388ff', DB.courses.length, 'Courses');
  html += statCard('fa-tasks', 'rgba(255, 0, 127, 0.12)', '#ff007f', DB.assignments.length, 'Assignments');
  html += statCard('fa-paper-plane', 'rgba(255, 215, 0, 0.12)', '#ffd700', DB.submissions.length, 'Submissions');
  html += '</div>';

  html += '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">';

  // Recent users
  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">Recent Users</h3><div class="space-y-3">';
  var recent = DB.users.slice().reverse().slice(0, 5);
  for (var i = 0; i < recent.length; i++) {
    var u = recent[i];
    html += '<div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--bg);">' +
      '<div class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ' + avatarClass(u.role) + '">' + u.avatar + '</div>' +
      '<div class="flex-1"><p class="text-sm font-medium">' + escAttr(u.name) + '</p><p class="text-xs" style="color:var(--fg-muted);">' + escAttr(u.email) + '</p></div>' +
      roleBadge(u.role) + '</div>';
  }
  html += '</div></div>';

  // Recent assignments
  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">Recent Assignments</h3><div class="space-y-3">';
  var recentA = DB.assignments.slice().reverse().slice(0, 5);
  for (var j = 0; j < recentA.length; j++) {
    var a = recentA[j];
    var c = getCourse(a.courseId);
    html += '<div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--bg);">' +
      '<div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background:rgba(123,33,49,0.2);"><i class="fas fa-file-alt text-sm" style="color:#f4d35e;"></i></div>' +
      '<div class="flex-1"><p class="text-sm font-medium">' + escAttr(a.title) + '</p>' +
      '<p class="text-xs" style="color:var(--fg-muted);">' + (c ? c.code : '') + ' — Due ' + formatDate(a.dueDate) + '</p></div>' +
      '<span class="text-xs font-medium" style="color:var(--accent);">' + a.maxPoints + 'pts</span></div>';
  }
  html += '</div></div></div>';
  return html;
}

// ===== LECTURER DASHBOARD =====
function renderLecturerDashboard() {
  var myCourses = DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; });
  var myAssignments = DB.assignments.filter(function (a) { return a.createdBy === currentUser.id; });
  var studentSet = {};
  for (var i = 0; i < myCourses.length; i++) {
    for (var j = 0; j < myCourses[i].studentIds.length; j++) {
      studentSet[myCourses[i].studentIds[j]] = true;
    }
  }
  var studentCount = Object.keys(studentSet).length;
  var pending = DB.submissions.filter(function (s) {
    return myAssignments.some(function (a) { return a.id === s.assignmentId; }) && s.grade === null;
  }).length;

  var html = '<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">';
  html += statCard('fa-book', 'rgba(124, 77, 255, 0.12)', '#b388ff', myCourses.length, 'My Courses');
  html += statCard('fa-tasks', 'rgba(255, 0, 127, 0.12)', '#ff007f', myAssignments.length, 'Assignments');
  html += statCard('fa-user-graduate', 'rgba(0, 242, 254, 0.12)', '#00f2fe', studentCount, 'Students');
  html += statCard('fa-clock', 'rgba(255, 215, 0, 0.12)', '#ffd700', pending, 'Pending Reviews');
  html += '</div>';

  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">My Courses</h3>';
  html += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">';
  for (var k = 0; k < myCourses.length; k++) {
    var co = myCourses[k];
    var aCount = DB.assignments.filter(function (a) { return a.courseId === co.id; }).length;
    html += '<div class="card card-interactive p-5" style="cursor:pointer;">' +
      '<div class="text-xs font-mono mb-2" style="color:var(--accent);">' + co.code + '</div>' +
      '<h4 class="font-bold mb-1">' + escAttr(co.name) + '</h4>' +
      '<p class="text-sm mb-3" style="color:var(--fg-muted);">' + co.dept + ' — ' + co.semester + '</p>' +
      '<div class="flex items-center gap-4 text-xs" style="color:var(--fg-muted);">' +
      '<span><i class="fas fa-users mr-1"></i>' + co.studentIds.length + ' students</span>' +
      '<span><i class="fas fa-tasks mr-1"></i>' + aCount + ' assignments</span></div></div>';
  }
  html += '</div></div>';
  return html;
}

// ===== STUDENT DASHBOARD =====
function renderStudentDashboard() {
  var myCourses = DB.courses.filter(function (c) { return c.studentIds.indexOf(currentUser.id) !== -1; });
  var mySubs = DB.submissions.filter(function (s) { return s.studentId === currentUser.id; });
  var graded = mySubs.filter(function (s) { return s.grade !== null; });
  var avg = graded.length ? Math.round(graded.reduce(function (s, x) { return s + x.grade; }, 0) / graded.length) : 0;
  var pending = 0;
  for (var i = 0; i < DB.assignments.length; i++) {
    var a = DB.assignments[i];
    if (myCourses.some(function (c) { return c.id === a.courseId; })) {
      if (!mySubs.some(function (s) { return s.assignmentId === a.id; })) pending++;
    }
  }

  var html = '';
  if (currentUser.indexNumber) {
    html += '<div class="mb-6 p-4 rounded-xl flex items-center justify-between" style="background:rgba(255,255,255,0.02);border:1px solid var(--border);">' +
      '<div><span class="text-xs uppercase tracking-wider block mb-1" style="color:var(--fg-muted);">Student Identification</span>' +
      '<span class="text-lg font-bold text-accent font-mono"><i class="fas fa-id-card mr-2"></i>' + escAttr(currentUser.indexNumber) + '</span></div>' +
      '<div class="text-right"><span class="text-xs uppercase tracking-wider block mb-1" style="color:var(--fg-muted);">Department</span>' +
      '<span class="text-sm font-semibold">' + escAttr(currentUser.department || 'Not Assigned') + '</span></div>' +
      '</div>';
  }

  html += '<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">';
  html += statCard('fa-book', 'rgba(124, 77, 255, 0.12)', '#b388ff', myCourses.length, 'Enrolled Courses');
  html += statCard('fa-paper-plane', 'rgba(255, 0, 127, 0.12)', '#ff007f', mySubs.length, 'Submissions');
  html += statCard('fa-exclamation-triangle', 'rgba(255, 215, 0, 0.12)', '#ffd700', pending, 'Pending');
  html += statCard('fa-chart-line', 'rgba(0, 242, 254, 0.12)', '#00f2fe', avg + '%', 'Average Grade');
  html += '</div>';

  // Upcoming deadlines
  html += '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">';
  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">Upcoming Deadlines</h3><div class="space-y-3">';
  var hasUpcoming = false;
  for (var j = 0; j < DB.assignments.length; j++) {
    var as = DB.assignments[j];
    if (myCourses.some(function (c) { return c.id === as.courseId; }) && !mySubs.some(function (s) { return s.assignmentId === as.id; })) {
      hasUpcoming = true;
      var co2 = getCourse(as.courseId);
      html += '<div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--bg);">' +
        '<div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:rgba(229,168,14,0.1);"><i class="fas fa-clock text-sm" style="color:#f0be38;"></i></div>' +
        '<div class="flex-1"><p class="text-sm font-medium">' + escAttr(as.title) + '</p>' +
        '<p class="text-xs" style="color:var(--fg-muted);">' + (co2 ? co2.code : '') + ' — Due ' + formatDate(as.dueDate) + '</p></div>' +
        '<span class="text-xs font-medium" style="color:var(--accent);">' + as.maxPoints + 'pts</span></div>';
    }
  }
  if (!hasUpcoming) html += '<p class="text-sm" style="color:var(--fg-muted);">All caught up!</p>';
  html += '</div></div>';

  // My Courses
  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">My Courses</h3><div class="space-y-3">';
  for (var k = 0; k < myCourses.length; k++) {
    var co3 = myCourses[k];
    var lect = getUser(co3.lecturerId);
    html += '<div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--bg);">' +
      '<div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:rgba(123,33,49,0.2);"><i class="fas fa-book text-sm" style="color:#f4d35e;"></i></div>' +
      '<div class="flex-1"><p class="text-sm font-medium">' + escAttr(co3.name) + '</p>' +
      '<p class="text-xs" style="color:var(--fg-muted);">' + co3.code + ' — ' + (lect ? lect.name : 'Unassigned') + '</p></div></div>';
  }
  html += '</div></div></div>';
  return html;
}

// ===== USER MANAGEMENT =====
function renderUsers() {
  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + DB.users.length + ' users in the system</p>' +
    '<button data-action="add-user" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add User</button></div>';

  html += '<div class="card overflow-hidden"><div class="overflow-x-auto"><table>' +
    '<thead><tr><th>Name</th><th>Email</th><th>Department</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>';

  for (var i = 0; i < DB.users.length; i++) {
    var u = DB.users[i];
    var statusBadge = u.isApproved === false
      ? '<span class="badge badge-lecturer" style="background:rgba(255,0,127,0.12);color:#ff007f;">Pending</span>'
      : '<span class="badge" style="background:rgba(0,230,118,0.12);color:#00e676;">Approved</span>';

    var actionsHtml = '<div class="flex items-center gap-2">';
    if (u.isApproved === false) {
      actionsHtml += '<button data-action="approve-user" data-id="' + u.id + '" class="text-xs py-1.5 px-3 rounded-md transition" style="color:#00e676;background:rgba(0, 230, 118, 0.1);border:1px solid rgba(0,230,118,0.25);cursor:pointer;"><i class="fas fa-check mr-1"></i>Approve</button>';
    }
    actionsHtml += '<button data-action="edit-user" data-id="' + u.id + '" class="text-xs py-1.5 px-3 rounded-md transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-edit mr-1"></i>Edit</button>' +
      '<button data-action="delete-user" data-id="' + u.id + '" class="text-xs py-1.5 px-3 rounded-md transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-trash mr-1"></i>Delete</button>' +
      '</div>';

    var nameDetails = '<span class="font-medium">' + escAttr(u.name) + '</span>';
    if (u.indexNumber) {
      nameDetails += '<div class="text-xs font-mono mt-0.5" style="color:var(--accent);">' + escAttr(u.indexNumber) + '</div>';
    }

    html += '<tr><td><div class="flex items-center gap-3">' +
      '<div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ' + avatarClass(u.role) + '">' + u.avatar + '</div>' +
      '<div>' + nameDetails + '</div></div></td>' +
      '<td style="color:var(--fg-muted);">' + escAttr(u.email) + '</td>' +
      '<td style="color:var(--fg-muted);">' + escAttr(u.department) + '</td>' +
      '<td>' + roleBadge(u.role) + '</td>' +
      '<td>' + statusBadge + '</td>' +
      '<td>' + actionsHtml + '</td></tr>';
  }
  html += '</tbody></table></div></div>';
  return html;
}

function openAddUserModal() {
  var body = '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Full Name</label><input id="mu-name" class="input-field" placeholder="Enter full name"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Email</label><input id="mu-email" type="email" class="input-field" placeholder="Enter email"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Password</label><input id="mu-password" type="text" class="input-field" placeholder="Set password"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Department</label><select id="mu-dept" class="input-field">' + getDepartmentOptionsHTML('') + '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Role</label>' +
    '<select id="mu-role" class="input-field"><option value="student">Student</option><option value="lecturer">Lecturer</option><option value="admin">Admin</option></select></div>' +
    '</div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-user" class="btn-primary text-sm">Add User</button>';
  showModal('Add New User', body, footer);
}

async function saveUser() {
  var name = document.getElementById('mu-name').value.trim();
  var email = document.getElementById('mu-email').value.trim();
  var password = document.getElementById('mu-password').value.trim();
  var dept = document.getElementById('mu-dept').value.trim();
  var role = document.getElementById('mu-role').value;
  if (!name || !email || !password) { showToast('Please fill in required fields', 'error'); return; }
  if (DB.users.find(function (u) { return u.email === email; })) { showToast('Email already exists', 'error'); return; }
  var avatar = name.split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  var user = { id: DB.nextId.users++, name: name, email: email, password: password, role: role, department: dept, avatar: avatar, isApproved: true };
  try {
    var approvalsStr = localStorage.getItem('lms-approved-emails');
    var approvalsArr = approvalsStr ? JSON.parse(approvalsStr) : [];
    if (!Array.isArray(approvalsArr)) approvalsArr = [];
    if (user.email && approvalsArr.indexOf(user.email.toLowerCase()) === -1) {
      approvalsArr.push(user.email.toLowerCase());
      localStorage.setItem('lms-approved-emails', JSON.stringify(approvalsArr));
    }
  } catch (e) { }

  DB.users.push(normalizeUser(user));
  if (supabaseEnabled && supabaseClient) {
    try { await syncUserToSupabase(user); } catch (err) { console.warn('Unable to sync user to Supabase', err); }
  }
  closeModal(); showToast('User added successfully'); renderPage();
}

function openEditUserModal(id) {
  var u = getUser(id);
  if (!u) return;
  var body = '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Full Name</label><input id="eu-name" class="input-field" value="' + escAttr(u.name) + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Email</label><input id="eu-email" type="email" class="input-field" value="' + escAttr(u.email) + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Password</label><input id="eu-password" type="text" class="input-field" value="' + escAttr(u.password) + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Department</label><select id="eu-dept" class="input-field">' + getDepartmentOptionsHTML(u.department) + '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Role</label>' +
    '<select id="eu-role" class="input-field">' +
    '<option value="student"' + (u.role === 'student' ? ' selected' : '') + '>Student</option>' +
    '<option value="lecturer"' + (u.role === 'lecturer' ? ' selected' : '') + '>Lecturer</option>' +
    '<option value="admin"' + (u.role === 'admin' ? ' selected' : '') + '>Admin</option>' +
    '</select></div>' +
    '<input type="hidden" id="eu-id" value="' + u.id + '">' +
    '</div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-edit-user" class="btn-primary text-sm">Save Changes</button>';
  showModal('Edit User', body, footer);
}

async function saveEditUser() {
  var id = parseInt(document.getElementById('eu-id').value);
  var u = getUser(id);
  if (!u) return;
  var name = document.getElementById('eu-name').value.trim();
  var email = document.getElementById('eu-email').value.trim();
  if (!name || !email) { showToast('Name and email are required', 'error'); return; }
  u.name = name;
  u.email = email;
  var pw = document.getElementById('eu-password').value.trim();
  if (pw) u.password = pw;
  u.department = document.getElementById('eu-dept').value.trim();
  u.role = document.getElementById('eu-role').value;
  u.avatar = name.split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  if (currentUser.id === id) {
    currentUser = u;
    document.getElementById('user-name').textContent = u.name;
    document.getElementById('user-role').textContent = u.role;
    var av = document.getElementById('user-avatar');
    av.className = 'w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ' + avatarClass(u.role);
    av.textContent = u.avatar;
  }
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('users').update({
        name: u.name,
        email: u.email,
        password: u.password,
        department: u.department,
        role: u.role,
        avatar: u.avatar
      }).eq('id', u.id);
    } catch (err) {
      console.warn('Unable to sync edited user to Supabase', err);
    }
  }
  closeModal(); showToast('User updated successfully'); renderPage();
}

function confirmDeleteUser(id) {
  if (id === currentUser.id) { showToast('Cannot delete your own account', 'error'); return; }
  showModal('Confirm Deletion', '<p class="text-center">Are you sure you want to delete this user? This action cannot be undone.</p>',
    '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button class="btn-danger text-sm" onclick="doDeleteUser(' + id + ')">Delete</button>');
}

async function doDeleteUser(id) {
  DB.users = DB.users.filter(function (u) { return u.id !== id; });
  DB.courses.forEach(function (c) { c.studentIds = c.studentIds.filter(function (sid) { return sid !== id; }); if (c.lecturerId === id) c.lecturerId = null; });
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('users').delete().eq('id', id);
      var promises = DB.courses.map(function (c) {
        return supabaseClient.from('courses').update({
          student_ids: c.studentIds,
          lecturer_id: c.lecturerId
        }).eq('id', c.id);
      });
      await Promise.all(promises);
    } catch (err) {
      console.warn('Unable to delete user and sync courses to Supabase', err);
    }
  }
  closeModal(); showToast('User deleted'); renderPage();
}

// ===== ROLES =====
function renderRoles() {
  var counts = { admin: 0, lecturer: 0, student: 0 };
  DB.users.forEach(function (u) { counts[u.role]++; });

  var perms = {
    admin: ['Full system access', 'Manage users & roles', 'Create/edit/delete courses', 'Manage all assignments & materials', 'View all submissions', 'System configuration'],
    lecturer: ['Manage own courses', 'Create/edit assignments', 'Upload course materials', 'Grade submissions', 'View enrolled students'],
    student: ['View enrolled courses', 'Submit assignments', 'Download materials', 'View own grades', 'View course details']
  };
  var icons = { admin: 'fa-crown', lecturer: 'fa-chalkboard-teacher', student: 'fa-user-graduate' };

  var html = '<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">';
  ['admin', 'lecturer', 'student'].forEach(function (role) {
    html += '<div class="card p-6"><div class="flex items-center gap-3 mb-4">' +
      '<div class="w-12 h-12 rounded-xl flex items-center justify-center ' + avatarClass(role) + '">' +
      '<i class="fas ' + icons[role] + ' text-lg"></i></div>' +
      '<div><h3 class="font-bold text-lg capitalize">' + role + '</h3>' +
      '<p class="text-sm" style="color:var(--fg-muted);">' + counts[role] + ' user' + (counts[role] !== 1 ? 's' : '') + '</p></div></div><ul class="space-y-2">';
    perms[role].forEach(function (p) {
      html += '<li class="flex items-start gap-2 text-sm"><i class="fas fa-check mt-0.5 text-xs" style="color:#f4d35e;"></i><span style="color:var(--fg-muted);">' + p + '</span></li>';
    });
    html += '</ul></div>';
  });
  html += '</div>';

  // Quick role assignment
  html += '<div class="card p-6"><h3 class="font-bold text-lg mb-4">Quick Role Assignment</h3>' +
    '<p class="text-sm mb-4" style="color:var(--fg-muted);">Select a user to change their role immediately.</p>' +
    '<div class="overflow-x-auto"><table><thead><tr><th>User</th><th>Current Role</th><th>New Role</th><th>Action</th></tr></thead><tbody>';

  DB.users.filter(function (u) { return u.id !== currentUser.id; }).forEach(function (u) {
    html += '<tr><td><div class="flex items-center gap-3">' +
      '<div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ' + avatarClass(u.role) + '">' + u.avatar + '</div>' +
      '<span class="font-medium">' + escAttr(u.name) + '</span></div></td>' +
      '<td>' + roleBadge(u.role) + '</td>' +
      '<td><select id="role-select-' + u.id + '" class="input-field text-sm" style="width:auto;padding:6px 30px 6px 10px;">' +
      '<option value="student"' + (u.role === 'student' ? ' selected' : '') + '>Student</option>' +
      '<option value="lecturer"' + (u.role === 'lecturer' ? ' selected' : '') + '>Lecturer</option>' +
      '<option value="admin"' + (u.role === 'admin' ? ' selected' : '') + '>Admin</option>' +
      '</select></td>' +
      '<td><button data-action="assign-role" data-id="' + u.id + '" class="btn-primary text-xs" style="padding:6px 16px;">Apply</button></td></tr>';
  });
  html += '</tbody></table></div></div>';
  return html;
}

async function applyRole(userId) {
  var u = getUser(userId);
  if (!u) return;
  var sel = document.getElementById('role-select-' + userId);
  if (!sel) return;
  var newRole = sel.value;
  if (u.role === newRole) { showToast('No change needed', 'info'); return; }
  u.role = newRole;
  u.avatar = u.name.split(' ').map(function (w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('users').update({
        role: u.role,
        avatar: u.avatar
      }).eq('id', u.id);
    } catch (err) {
      console.warn('Unable to sync role to Supabase', err);
    }
  }
  showToast(u.name + ' is now a ' + newRole);
  renderPage();
}

// ===== COURSES ADMIN =====
function renderCoursesAdmin() {
  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + DB.courses.length + ' courses</p>' +
    '<button data-action="add-course" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Course</button></div>';

  html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
  DB.courses.forEach(function (c) {
    var lect = getUser(c.lecturerId);
    html += '<div class="card p-6">' +
      '<div class="flex items-start justify-between mb-3"><div>' +
      '<span class="text-xs font-mono font-bold" style="color:var(--accent);">' + c.code + '</span>' +
      '<h4 class="font-bold text-lg mt-1">' + escAttr(c.name) + '</h4></div>' +
      '<div class="flex gap-1">' +
      '<button data-action="edit-course" data-id="' + c.id + '" class="w-8 h-8 rounded-lg flex items-center justify-center transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-edit text-xs"></i></button>' +
      '<button data-action="delete-course" data-id="' + c.id + '" class="w-8 h-8 rounded-lg flex items-center justify-center transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-trash text-xs"></i></button>' +
      '</div></div>' +
      '<p class="text-sm mb-4" style="color:var(--fg-muted);">' + escAttr(c.description) + '</p>' +
      '<div class="grid grid-cols-2 gap-3 text-xs" style="color:var(--fg-muted);">' +
      '<span><i class="fas fa-building mr-1"></i>' + escAttr(c.dept) + '</span>' +
      '<span><i class="fas fa-calendar mr-1"></i>' + escAttr(c.semester) + '</span>' +
      '<span><i class="fas fa-user mr-1"></i>' + (lect ? escAttr(lect.name) : 'Unassigned') + '</span>' +
      '<span><i class="fas fa-users mr-1"></i>' + c.studentIds.length + ' students</span>' +
      '<span><i class="fas fa-star mr-1"></i>' + c.credits + ' credits</span></div></div>';
  });
  html += '</div>';
  return html;
}

function renderMyCourses() {
  var myCourses = currentUser.role === 'lecturer'
    ? DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; })
    : DB.courses.filter(function (c) { return c.studentIds.indexOf(currentUser.id) !== -1; });

  var html = '<p class="text-sm mb-6" style="color:var(--fg-muted);">' + myCourses.length + ' course' + (myCourses.length !== 1 ? 's' : '') + '</p>';
  html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
  myCourses.forEach(function (c) {
    var lect = getUser(c.lecturerId);
    html += '<div class="card p-6">' +
      '<span class="text-xs font-mono font-bold" style="color:var(--accent);">' + c.code + '</span>' +
      '<h4 class="font-bold text-lg mt-1 mb-2">' + escAttr(c.name) + '</h4>' +
      '<p class="text-sm mb-4" style="color:var(--fg-muted);">' + escAttr(c.description) + '</p>' +
      '<div class="grid grid-cols-2 gap-3 text-xs" style="color:var(--fg-muted);">' +
      '<span><i class="fas fa-building mr-1"></i>' + escAttr(c.dept) + '</span>' +
      '<span><i class="fas fa-calendar mr-1"></i>' + escAttr(c.semester) + '</span>' +
      '<span><i class="fas fa-user mr-1"></i>' + (lect ? escAttr(lect.name) : 'Unassigned') + '</span>' +
      '<span><i class="fas fa-users mr-1"></i>' + c.studentIds.length + ' students</span></div></div>';
  });
  html += '</div>';
  return html;
}

function courseFormHTML(c) {
  var lects = DB.users.filter(function (u) { return u.role === 'lecturer'; });
  var studs = DB.users.filter(function (u) { return u.role === 'student'; });
  var prefix = c ? 'ec' : 'mc';
  var body = '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Course Code</label><input id="' + prefix + '-code" class="input-field" placeholder="e.g. CS401" value="' + (c ? escAttr(c.code) : '') + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Course Name</label><input id="' + prefix + '-name" class="input-field" placeholder="e.g. Machine Learning" value="' + (c ? escAttr(c.name) : '') + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Department</label><select id="' + prefix + '-dept" class="input-field">' + getDepartmentOptionsHTML(c ? c.dept : '') + '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Semester</label><input id="' + prefix + '-sem" class="input-field" placeholder="e.g. Fall 2025" value="' + (c ? escAttr(c.semester) : '') + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Credits</label><input id="' + prefix + '-credits" type="number" class="input-field" value="' + (c ? c.credits : '3') + '" min="1" max="6"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Description</label><textarea id="' + prefix + '-desc" class="input-field" rows="3" placeholder="Course description">' + (c ? escAttr(c.description) : '') + '</textarea></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Lecturer</label>' +
    '<select id="' + prefix + '-lecturer" class="input-field"><option value="">-- Select Lecturer --</option>';
  lects.forEach(function (l) {
    body += '<option value="' + l.id + '"' + (c && c.lecturerId === l.id ? ' selected' : '') + '>' + escAttr(l.name) + '</option>';
  });
  body += '</select></div>';
  body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Enroll Students</label>' +
    '<div class="max-h-40 overflow-y-auto space-y-2 p-3 rounded-lg" style="background:var(--bg);">';
  studs.forEach(function (s) {
    var checked = c && c.studentIds.indexOf(s.id) !== -1 ? ' checked' : '';
    body += '<label class="flex items-center gap-2 text-sm cursor-pointer">' +
      '<input type="checkbox" value="' + s.id + '" class="' + prefix + '-student"' + checked + '> ' + escAttr(s.name) + ' <span class="text-xs" style="color:var(--fg-muted);">(' + escAttr(s.department) + ')</span></label>';
  });
  body += '</div></div>';
  if (c) body += '<input type="hidden" id="ec-id" value="' + c.id + '">';
  body += '</div>';
  return body;
}

function openAddCourseModal() {
  var body = courseFormHTML(null);
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-course" class="btn-primary text-sm">Create Course</button>';
  showModal('Add New Course', body, footer);
}

async function saveCourse() {
  var code = document.getElementById('mc-code').value.trim();
  var name = document.getElementById('mc-name').value.trim();
  var dept = document.getElementById('mc-dept').value.trim();
  var sem = document.getElementById('mc-sem').value.trim();
  var credits = parseInt(document.getElementById('mc-credits').value) || 3;
  var desc = document.getElementById('mc-desc').value.trim();
  var lecturerId = parseInt(document.getElementById('mc-lecturer').value) || null;
  var checkboxes = document.querySelectorAll('.mc-student:checked');
  var studentIds = [];
  for (var i = 0; i < checkboxes.length; i++) studentIds.push(parseInt(checkboxes[i].value));
  if (!code || !name) { showToast('Code and name are required', 'error'); return; }
  var newCourse = { id: DB.nextId.courses++, code: code, name: name, dept: dept, semester: sem, credits: credits, description: desc, lecturerId: lecturerId, studentIds: studentIds };
  DB.courses.push(newCourse);
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('courses').insert({
        id: newCourse.id,
        code: newCourse.code,
        name: newCourse.name,
        dept: newCourse.dept,
        lecturer_id: newCourse.lecturerId,
        student_ids: newCourse.studentIds,
        credits: newCourse.credits,
        semester: newCourse.semester,
        description: newCourse.description
      });
    } catch (err) {
      console.warn('Unable to sync new course to Supabase', err);
    }
  }
  closeModal(); showToast('Course created'); renderPage();
}

function openEditCourseModal(id) {
  var c = getCourse(id);
  if (!c) return;
  var body = courseFormHTML(c);
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-edit-course" class="btn-primary text-sm">Save Changes</button>';
  showModal('Edit Course', body, footer);
}

async function saveEditCourse() {
  var id = parseInt(document.getElementById('ec-id').value);
  var c = getCourse(id);
  if (!c) return;
  c.code = document.getElementById('ec-code').value.trim();
  c.name = document.getElementById('ec-name').value.trim();
  c.dept = document.getElementById('ec-dept').value.trim();
  c.semester = document.getElementById('ec-sem').value.trim();
  c.credits = parseInt(document.getElementById('ec-credits').value) || 3;
  c.description = document.getElementById('ec-desc').value.trim();
  c.lecturerId = parseInt(document.getElementById('ec-lecturer').value) || null;
  var checkboxes = document.querySelectorAll('.ec-student:checked');
  c.studentIds = [];
  for (var i = 0; i < checkboxes.length; i++) c.studentIds.push(parseInt(checkboxes[i].value));
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('courses').update({
        code: c.code,
        name: c.name,
        dept: c.dept,
        semester: c.semester,
        credits: c.credits,
        description: c.description,
        lecturer_id: c.lecturerId,
        student_ids: c.studentIds
      }).eq('id', c.id);
    } catch (err) {
      console.warn('Unable to sync edited course to Supabase', err);
    }
  }
  closeModal(); showToast('Course updated'); renderPage();
}

function confirmDeleteCourse(id) {
  showModal('Confirm Deletion', '<p class="text-center">Delete this course and all its assignments and materials?</p>',
    '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button class="btn-danger text-sm" onclick="doDeleteCourse(' + id + ')">Delete</button>');
}

async function doDeleteCourse(id) {
  var remainingAssignmentIds = DB.assignments.filter(function (a) { return a.courseId !== id; }).map(function (a) { return a.id; });
  DB.courses = DB.courses.filter(function (c) { return c.id !== id; });
  DB.submissions = DB.submissions.filter(function (s) { return remainingAssignmentIds.indexOf(s.assignmentId) !== -1; });
  DB.assignments = DB.assignments.filter(function (a) { return a.courseId !== id; });
  DB.materials = DB.materials.filter(function (m) { return m.courseId !== id; });
  if (supabaseEnabled && supabaseClient) {
    try {
      await Promise.all([
        supabaseClient.from('courses').delete().eq('id', id),
        supabaseClient.from('assignments').delete().eq('course_id', id),
        supabaseClient.from('materials').delete().eq('course_id', id)
      ]);
      var assignmentIdsToDelete = DB.assignments.filter(function (a) { return a.courseId === id; }).map(function (a) { return a.id; });
      if (assignmentIdsToDelete.length > 0) {
        await supabaseClient.from('submissions').delete().in('assignment_id', assignmentIdsToDelete);
      }
    } catch (err) {
      console.warn('Unable to delete course data from Supabase', err);
    }
  }
  closeModal(); showToast('Course deleted'); renderPage();
}

// ===== ASSIGNMENTS =====
function renderAllAssignments() {
  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + DB.assignments.length + ' assignments</p>' +
    '<button data-action="add-assignment" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Assignment</button></div>';
  html += buildAssignmentTable(DB.assignments, true);
  return html;
}

function renderLecturerAssignments() {
  var myCourses = DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; });
  var myAssignments = DB.assignments.filter(function (a) { return myCourses.some(function (c) { return c.id === a.courseId; }); });

  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + myAssignments.length + ' assignments in your courses</p>' +
    '<button data-action="add-assignment" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Assignment</button></div>';

  html += '<div class="space-y-4">';
  myAssignments.forEach(function (a) {
    var c = getCourse(a.courseId);
    var subs = DB.submissions.filter(function (s) { return s.assignmentId === a.id; });
    var graded = subs.filter(function (s) { return s.grade !== null; }).length;
    var submissionLabel = a.submissionType === 'file' ? 'File submission' : a.submissionType === 'both' ? 'Text + file' : 'Text submission';
    html += '<div class="card p-5"><div class="flex items-start justify-between"><div class="flex-1">' +
      '<div class="flex items-center gap-3 mb-2"><span class="text-xs font-mono font-bold" style="color:var(--accent);">' + (c ? c.code : '') + '</span>' +
      '<h4 class="font-bold">' + escAttr(a.title) + '</h4></div>' +
      '<p class="text-sm mb-3" style="color:var(--fg-muted);">' + escAttr(a.description) + '</p>' +
      '<div class="flex items-center gap-5 text-xs flex-wrap" style="color:var(--fg-muted);">' +
      '<span><i class="fas fa-calendar mr-1"></i>Due ' + formatDate(a.dueDate) + '</span>' +
      '<span><i class="fas fa-star mr-1"></i>' + a.maxPoints + ' points</span>' +
      '<span><i class="fas fa-paper-plane mr-1"></i>' + subs.length + ' submitted</span>' +
      '<span><i class="fas fa-check-circle mr-1"></i>' + graded + ' graded</span>' +
      '<span><i class="fas fa-file-alt mr-1"></i>' + submissionLabel + '</span></div></div>' +
      '<div class="flex gap-1 ml-4">' +
      '<button data-action="edit-assignment" data-id="' + a.id + '" class="w-8 h-8 rounded-lg flex items-center justify-center transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-edit text-xs"></i></button>' +
      '<button data-action="delete-assignment" data-id="' + a.id + '" class="w-8 h-8 rounded-lg flex items-center justify-center transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-trash text-xs"></i></button>' +
      '</div></div></div>';
  });
  html += '</div>';
  return html;
}

function renderStudentAssignments() {
  var myCourses = DB.courses.filter(function (c) { return c.studentIds.indexOf(currentUser.id) !== -1; });
  var mySubs = DB.submissions.filter(function (s) { return s.studentId === currentUser.id; });

  var html = '<p class="text-sm mb-6" style="color:var(--fg-muted);">Assignments across your courses</p>';
  html += '<div class="space-y-4">';

  for (var i = 0; i < DB.assignments.length; i++) {
    var a = DB.assignments[i];
    if (!myCourses.some(function (c) { return c.id === a.courseId; })) continue;
    var c = getCourse(a.courseId);
    var sub = mySubs.find(function (s) { return s.assignmentId === a.id; });
    var isPast = new Date(a.dueDate) < new Date();

    var statusBadge = '';
    if (sub) {
      if (sub.grade !== null) {
        statusBadge = '<span class="badge" style="background:rgba(244,211,103,0.18);color:#f4d35e;">Graded: ' + sub.grade + '/' + a.maxPoints + '</span>';
      } else {
        statusBadge = '<span class="badge" style="background:rgba(255,255,255,0.12);color:#f9f5f2;">Submitted</span>';
      }
    } else if (isPast) {
      statusBadge = '<span class="badge" style="background:rgba(220,38,38,0.15);color:#f87171;">Overdue</span>';
    } else {
      statusBadge = '<span class="badge" style="background:rgba(244,211,103,0.15);color:#f4d35e;">Pending</span>';
    }

    var submissionLabel = a.submissionType === 'file' ? 'File submission' : a.submissionType === 'both' ? 'Text + file' : 'Text submission';
    html += '<div class="card p-5"><div class="flex items-start justify-between"><div class="flex-1">' +
      '<div class="flex items-center gap-3 mb-2 flex-wrap">' +
      '<span class="text-xs font-mono font-bold" style="color:var(--accent);">' + (c ? c.code : '') + '</span>' +
      '<h4 class="font-bold">' + escAttr(a.title) + '</h4>' + statusBadge + '</div>' +
      '<p class="text-sm mb-3" style="color:var(--fg-muted);">' + escAttr(a.description) + '</p>' +
      '<div class="flex items-center gap-5 text-xs flex-wrap" style="color:var(--fg-muted);">' +
      '<span><i class="fas fa-calendar mr-1"></i>Due ' + formatDate(a.dueDate) + '</span>' +
      '<span><i class="fas fa-star mr-1"></i>' + a.maxPoints + ' points</span>' +
      '<span><i class="fas fa-file-alt mr-1"></i>' + submissionLabel + '</span></div>';

    if (sub && sub.feedback) {
      html += '<div class="mt-3 p-3 rounded-lg text-sm" style="background:var(--bg);"><span class="font-medium" style="color:var(--accent);">Feedback:</span> <span style="color:var(--fg-muted);">' + escAttr(sub.feedback) + '</span></div>';
    }

    html += '</div><div class="ml-4">';
    if (!sub) {
      html += '<button data-action="submit-assignment" data-id="' + a.id + '" class="btn-primary text-sm">Submit</button>';
    } else {
      html += '<button data-action="view-submission" data-id="' + sub.id + '" class="btn-secondary text-sm mr-2">View</button>';
      html += '<button data-action="resubmit-assignment" data-id="' + sub.id + '" class="btn-secondary text-sm">Resubmit</button>';
    }
    html += '</div></div></div>';
  }
  html += '</div>';
  return html;
}

function renderStudentSubmissions() {
  var mySubs = DB.submissions.filter(function (s) { return s.studentId === currentUser.id; });
  if (!mySubs.length) {
    return '<div class="card p-6 text-center"><p class="text-sm" style="color:var(--fg-muted);">You have not submitted any assignments yet.</p></div>';
  }

  var html = '<div class="card overflow-hidden mb-6"><div class="overflow-x-auto"><table>' +
    '<thead><tr><th>Assignment</th><th>Course</th><th>Submitted</th><th>Status</th><th>Grade</th><th>Actions</th></tr></thead><tbody>';

  mySubs.forEach(function (s) {
    var a = getAssignment(s.assignmentId);
    var c = a ? getCourse(a.courseId) : null;
    var status = s.grade !== null ? 'Graded' : 'Awaiting grade';
    var gradeLabel = s.grade !== null ? s.grade + '/' + (a ? a.maxPoints : '?') : 'Pending';
    html += '<tr><td class="font-medium text-sm">' + (a ? escAttr(a.title) : 'Unknown') + '</td>' +
      '<td><span class="text-xs font-mono" style="color:var(--accent);">' + (c ? c.code : '') + '</span> ' + (c ? escAttr(c.name) : '') + '</td>' +
      '<td class="text-sm" style="color:var(--fg-muted);">' + formatDate(s.submittedAt) + '</td>' +
      '<td><span class="badge" style="background:' + (s.grade !== null ? 'rgba(244,211,103,0.18)' : 'rgba(255,255,255,0.12)') + ';color:' + (s.grade !== null ? '#f4d35e' : '#f9f5f2') + ';">' + status + '</span></td>' +
      '<td class="text-sm" style="color:var(--fg-muted);">' + gradeLabel + '</td>' +
      '<td><button data-action="view-submission" data-id="' + s.id + '" class="btn-secondary text-xs">View</button></td></tr>';
  });

  html += '</tbody></table></div></div>';
  return html;
}

function openViewSubmissionModal(subId) {
  var s = DB.submissions.find(function (x) { return x.id === subId; });
  if (!s) return;
  var a = getAssignment(s.assignmentId);
  var c = a ? getCourse(a.courseId) : null;
  var body = '<div class="mb-4 p-4 rounded-lg" style="background:var(--bg);">' +
    '<p class="font-medium">' + (a ? escAttr(a.title) : 'Unknown assignment') + '</p>' +
    '<p class="text-xs mt-1" style="color:var(--fg-muted);">' + (c ? escAttr(c.code) + ' — ' + escAttr(c.name) : '') + '</p>' +
    '<p class="text-xs mt-2" style="color:var(--fg-muted);">Submitted: ' + formatDate(s.submittedAt) + '</p>' +
    '</div>' +
    '<div class="mb-4 p-4 rounded-lg" style="background:var(--bg);">' +
    '<p class="text-sm font-medium mb-2">Submission</p>' +
    '<p class="text-sm" style="color:var(--fg-muted); white-space:pre-wrap;">' + escAttr(s.content || 'No text submitted') + '</p>' +
    '</div>' +
    '<div class="grid grid-cols-1 gap-4 md:grid-cols-2">' +
    '<div class="p-4 rounded-lg" style="background:var(--bg);"><p class="text-sm font-medium mb-2">Grade</p><p class="text-sm" style="color:' + (s.grade !== null ? '#f4d35e' : '#f9f5f2') + ';">' + (s.grade !== null ? s.grade + '/' + (a ? a.maxPoints : '?') : 'Pending') + '</p></div>' +
    '<div class="p-4 rounded-lg" style="background:var(--bg);"><p class="text-sm font-medium mb-2">Feedback</p><p class="text-sm" style="color:var(--fg-muted);">' + (s.feedback ? escAttr(s.feedback) : 'No feedback yet') + '</p></div>' +
    '</div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Close</button>';
  showModal('View Submission', body, footer);
}

function buildAssignmentTable(assignments, showActions) {
  var html = '<div class="card overflow-hidden"><div class="overflow-x-auto"><table>' +
    '<thead><tr><th>Title</th><th>Course</th><th>Due Date</th><th>Points</th><th>Submissions</th>' +
    (showActions ? '<th>Actions</th>' : '') + '</tr></thead><tbody>';
  assignments.forEach(function (a) {
    var c = getCourse(a.courseId);
    var subs = DB.submissions.filter(function (s) { return s.assignmentId === a.id; }).length;
    html += '<tr><td class="font-medium">' + escAttr(a.title) + '</td>' +
      '<td><span class="text-xs font-mono" style="color:var(--accent);">' + (c ? c.code : 'N/A') + '</span> ' + (c ? escAttr(c.name) : '') + '</td>' +
      '<td style="color:var(--fg-muted);">' + formatDate(a.dueDate) + '</td>' +
      '<td>' + a.maxPoints + '</td><td>' + subs + '</td>';
    if (showActions) {
      html += '<td><div class="flex gap-1">' +
        '<button data-action="edit-assignment" data-id="' + a.id + '" class="text-xs py-1.5 px-3 rounded-md transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-edit"></i></button>' +
        '<button data-action="delete-assignment" data-id="' + a.id + '" class="text-xs py-1.5 px-3 rounded-md transition" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-trash"></i></button>' +
        '</div></td>';
    }
    html += '</tr>';
  });
  html += '</tbody></table></div></div>';
  return html;
}

function assignmentFormHTML(a) {
  var courses = currentUser.role === 'lecturer'
    ? DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; })
    : DB.courses;
  var prefix = a ? 'ea' : 'ma';
  var body = '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Course</label>' +
    '<select id="' + prefix + '-course" class="input-field"><option value="">-- Select Course --</option>';
  courses.forEach(function (c) {
    body += '<option value="' + c.id + '"' + (a && a.courseId === c.id ? ' selected' : '') + '>' + c.code + ' — ' + escAttr(c.name) + '</option>';
  });
  body += '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Title</label><input id="' + prefix + '-title" class="input-field" placeholder="Assignment title" value="' + (a ? escAttr(a.title) : '') + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Description</label><textarea id="' + prefix + '-desc" class="input-field" rows="4" placeholder="Detailed instructions">' + (a ? escAttr(a.description) : '') + '</textarea></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Submission Type</label>' +
    '<select id="' + prefix + '-submission-type" class="input-field">' +
    '<option value="text"' + ((a && a.submissionType === 'text') || !a ? ' selected' : '') + '>Text Submission</option>' +
    '<option value="file"' + (a && a.submissionType === 'file' ? ' selected' : '') + '>File Submission</option>' +
    '<option value="both"' + (a && a.submissionType === 'both' ? ' selected' : '') + '>Text + File</option>' +
    '</select></div>' +
    '<div class="grid grid-cols-2 gap-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Due Date</label><input id="' + prefix + '-due" type="date" class="input-field" value="' + (a ? a.dueDate : '') + '"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Max Points</label><input id="' + prefix + '-points" type="number" class="input-field" value="' + (a ? a.maxPoints : '100') + '" min="1"></div></div>';
  if (a) body += '<input type="hidden" id="ea-id" value="' + a.id + '">';
  body += '</div>';
  return body;
}

function openAddAssignmentModal() {
  var body = assignmentFormHTML(null);
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-assignment" class="btn-primary text-sm">Create Assignment</button>';
  showModal('Add Assignment', body, footer);
}

async function saveAssignment() {
  var courseId = parseInt(document.getElementById('ma-course').value);
  var title = document.getElementById('ma-title').value.trim();
  var desc = document.getElementById('ma-desc').value.trim();
  var dueDate = document.getElementById('ma-due').value;
  var maxPoints = parseInt(document.getElementById('ma-points').value) || 100;
  var submissionType = document.getElementById('ma-submission-type').value;
  if (!courseId || !title || !dueDate) { showToast('Course, title, and due date are required', 'error'); return; }
  var newAssignment = { id: DB.nextId.assignments++, courseId: courseId, title: title, description: desc, dueDate: dueDate, maxPoints: maxPoints, createdBy: currentUser.id, submissionType: submissionType };
  DB.assignments.push(newAssignment);
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('assignments').insert({
        id: newAssignment.id,
        course_id: newAssignment.courseId,
        title: newAssignment.title,
        description: newAssignment.description,
        due_date: newAssignment.dueDate,
        max_points: newAssignment.maxPoints,
        created_by: newAssignment.createdBy
      });
    } catch (err) {
      console.warn('Unable to sync new assignment to Supabase', err);
    }
  }
  closeModal(); showToast('Assignment created'); renderPage();
}

function openEditAssignmentModal(id) {
  var a = getAssignment(id);
  if (!a) return;
  var body = assignmentFormHTML(a);
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-edit-assignment" class="btn-primary text-sm">Save Changes</button>';
  showModal('Edit Assignment', body, footer);
}

async function saveEditAssignment() {
  var id = parseInt(document.getElementById('ea-id').value);
  var a = getAssignment(id);
  if (!a) return;
  a.courseId = parseInt(document.getElementById('ea-course').value);
  a.title = document.getElementById('ea-title').value.trim();
  a.description = document.getElementById('ea-desc').value.trim();
  a.dueDate = document.getElementById('ea-due').value;
  a.maxPoints = parseInt(document.getElementById('ea-points').value) || 100;
  a.submissionType = document.getElementById('ea-submission-type').value;
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('assignments').update({
        course_id: a.courseId,
        title: a.title,
        description: a.description,
        due_date: a.dueDate,
        max_points: a.maxPoints
      }).eq('id', a.id);
    } catch (err) {
      console.warn('Unable to sync edited assignment to Supabase', err);
    }
  }
  closeModal(); showToast('Assignment updated'); renderPage();
}

function confirmDeleteAssignment(id) {
  showModal('Confirm Deletion', '<p class="text-center">Delete this assignment and all its submissions?</p>',
    '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button class="btn-danger text-sm" onclick="doDeleteAssignment(' + id + ')">Delete</button>');
}

async function doDeleteAssignment(id) {
  DB.assignments = DB.assignments.filter(function (a) { return a.id !== id; });
  DB.submissions = DB.submissions.filter(function (s) { return s.assignmentId !== id; });
  if (supabaseEnabled && supabaseClient) {
    try {
      await Promise.all([
        supabaseClient.from('assignments').delete().eq('id', id),
        supabaseClient.from('submissions').delete().eq('assignment_id', id)
      ]);
    } catch (err) {
      console.warn('Unable to delete assignment from Supabase', err);
    }
  }
  closeModal(); showToast('Assignment deleted'); renderPage();
}

// ===== STUDENT SUBMISSION =====
function openSubmitModal(assignmentId) {
  var a = getAssignment(assignmentId);
  if (!a) return;
  var submissionType = a.submissionType || 'text';
  var body = '<div class="mb-4 p-3 rounded-lg" style="background:var(--bg);">' +
    '<p class="font-medium">' + escAttr(a.title) + '</p>' +
    '<p class="text-xs mt-1" style="color:var(--fg-muted);">Due: ' + formatDate(a.dueDate) + ' | Points: ' + a.maxPoints + ' | Type: ' + (submissionType === 'file' ? 'File' : submissionType === 'both' ? 'Text + File' : 'Text') + '</p></div>';
  if (submissionType === 'file') {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Upload File</label><input id="sub-file" type="file" class="input-field"></div>';
  } else if (submissionType === 'both') {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Your Submission</label><textarea id="sub-content" class="input-field" rows="5" placeholder="Write your submission or describe your uploaded work"></textarea></div>' +
      '<div class="mt-4"><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Upload File (optional)</label><input id="sub-file" type="file" class="input-field"></div>';
  } else {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Your Submission</label><textarea id="sub-content" class="input-field" rows="5" placeholder="Write your submission"></textarea></div>';
  }
  body += '<input type="hidden" id="sub-aid" value="' + assignmentId + '">';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-submission" class="btn-primary text-sm">Submit</button>';
  showModal('Submit Assignment', body, footer);
}

async function saveSubmission() {
  var assignmentId = parseInt(document.getElementById('sub-aid').value);
  var a = getAssignment(assignmentId);
  var submissionType = a ? (a.submissionType || 'text') : 'text';
  var content = '';
  var fileName = '';
  var contentInput = document.getElementById('sub-content');
  if (contentInput) content = contentInput.value.trim();
  var fileInput = document.getElementById('sub-file');
  if (fileInput && fileInput.files && fileInput.files.length) fileName = fileInput.files[0].name;

  if (submissionType === 'text' && !content) { showToast('Please write your submission', 'error'); return; }
  if (submissionType === 'file' && !fileName) { showToast('Please choose a file to upload', 'error'); return; }
  if (submissionType === 'both' && !content && !fileName) { showToast('Please provide text or a file', 'error'); return; }

  var finalContent = content || (fileName ? 'File attached: ' + fileName : '');
  var sub = { id: DB.nextId.submissions++, assignmentId: assignmentId, studentId: currentUser.id, content: finalContent, submittedAt: new Date().toISOString().split('T')[0], grade: null, feedback: null, attachmentName: fileName || null };
  DB.submissions.push(sub);
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('submissions').insert({
        id: sub.id,
        assignment_id: sub.assignmentId,
        student_id: sub.studentId,
        content: sub.content,
        submitted_at: sub.submittedAt,
        grade: sub.grade,
        feedback: sub.feedback
      });
    } catch (err) {
      console.warn('Unable to sync new submission to Supabase', err);
    }
  }
  closeModal(); showToast('Assignment submitted'); renderPage();
}

function openResubmitModal(subId) {
  var sub = DB.submissions.find(function (s) { return s.id === subId; });
  if (!sub) return;
  var a = getAssignment(sub.assignmentId);
  var submissionType = a ? (a.submissionType || 'text') : 'text';
  var body = '<div class="mb-4 p-3 rounded-lg" style="background:var(--bg);">' +
    '<p class="font-medium">' + (a ? escAttr(a.title) : '') + '</p>' +
    '<p class="text-xs mt-1" style="color:var(--fg-muted);">Due: ' + (a ? formatDate(a.dueDate) : '') + ' | Points: ' + (a ? a.maxPoints : '') + ' | Type: ' + (submissionType === 'file' ? 'File' : submissionType === 'both' ? 'Text + File' : 'Text') + '</p></div>';
  if (submissionType === 'file') {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Upload File</label><input id="resub-file" type="file" class="input-field"></div>';
  } else if (submissionType === 'both') {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Your Submission</label><textarea id="resub-content" class="input-field" rows="5" placeholder="Write your submission">' + escAttr(sub.content) + '</textarea></div>' +
      '<div class="mt-4"><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Upload File (optional)</label><input id="resub-file" type="file" class="input-field"></div>';
  } else {
    body += '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Your Submission</label><textarea id="resub-content" class="input-field" rows="5" placeholder="Write your submission">' + escAttr(sub.content) + '</textarea></div>';
  }
  body += '<input type="hidden" id="resub-sid" value="' + sub.id + '">';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-resubmission" class="btn-primary text-sm">Resubmit</button>';
  showModal('Resubmit Assignment', body, footer);
}

async function saveResubmission() {
  var subId = parseInt(document.getElementById('resub-sid').value);
  var sub = DB.submissions.find(function (s) { return s.id === subId; });
  if (!sub) return;
  var a = getAssignment(sub.assignmentId);
  var submissionType = a ? (a.submissionType || 'text') : 'text';
  var content = '';
  var fileName = '';
  var contentInput = document.getElementById('resub-content');
  if (contentInput) content = contentInput.value.trim();
  var fileInput = document.getElementById('resub-file');
  if (fileInput && fileInput.files && fileInput.files.length) fileName = fileInput.files[0].name;

  if (submissionType === 'text' && !content) { showToast('Please write your submission', 'error'); return; }
  if (submissionType === 'file' && !fileName) { showToast('Please choose a file to upload', 'error'); return; }
  if (submissionType === 'both' && !content && !fileName) { showToast('Please provide text or a file', 'error'); return; }

  sub.content = content || (fileName ? 'File attached: ' + fileName : '');
  sub.attachmentName = fileName || null;
  sub.submittedAt = new Date().toISOString().split('T')[0];
  sub.grade = null;
  sub.feedback = null;
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('submissions').update({
        content: sub.content,
        submitted_at: sub.submittedAt,
        grade: sub.grade,
        feedback: sub.feedback
      }).eq('id', sub.id);
    } catch (err) {
      console.warn('Unable to sync resubmission to Supabase', err);
    }
  }
  closeModal(); showToast('Assignment resubmitted'); renderPage();
}

// ===== MATERIALS =====
function materialIcon(type) {
  if (type === 'pdf') return 'fa-file-pdf';
  if (type === 'video') return 'fa-file-video';
  return 'fa-file';
}

function materialIconColor(type) {
  if (type === 'pdf') return '#f87171';
  if (type === 'video') return '#f9f5f2';
  return '#9ca3af';
}

function materialIconBg(type) {
  if (type === 'pdf') return 'rgba(248,113,113,0.1)';
  if (type === 'video') return 'rgba(96,165,250,0.1)';
  return 'rgba(156,163,175,0.1)';
}

function groupMaterialsByCourse(materials) {
  var grouped = {};
  materials.forEach(function (m) {
    var c = getCourse(m.courseId);
    var key = c ? c.id : ('course-' + m.courseId);
    if (!grouped[key]) {
      grouped[key] = { course: c, items: [] };
    }
    grouped[key].items.push(m);
  });
  return Object.keys(grouped).map(function (key) { return grouped[key]; });
}

function renderMaterialsByCourse(materials, mode) {
  var groups = groupMaterialsByCourse(materials);
  if (!groups.length) {
    return '<div class="card p-8 text-center" style="color:var(--fg-muted);">No lecture materials available for this module yet.</div>';
  }

  var html = '';
  groups.forEach(function (group) {
    var c = group.course;
    var courseLabel = c ? (c.code + ' — ' + c.name) : 'General Module';
    html += '<div class="mb-8">' +
      '<div class="flex items-center justify-between mb-3">' +
      '<div><h3 class="font-bold text-lg">' + escAttr(courseLabel) + '</h3>' +
      '<p class="text-sm" style="color:var(--fg-muted);">Module materials · ' + group.items.length + ' items</p></div>' +
      '</div>' +
      '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';

    group.items.forEach(function (m) {
      html += '<div class="card p-5"><div class="flex items-start gap-3">' +
        '<div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:' + materialIconBg(m.type) + ';">' +
        '<i class="fas ' + materialIcon(m.type) + ' text-xl" style="color:' + materialIconColor(m.type) + ';"></i></div>' +
        '<div class="flex-1 min-w-0"><h4 class="font-bold text-sm">' + escAttr(m.title) + '</h4>' +
        '<div class="flex items-center gap-3 text-xs mt-1" style="color:var(--fg-muted);">' +
        '<span class="font-mono" style="color:var(--accent);">' + (c ? c.code : '') + '</span>' +
        '<span>' + m.type.toUpperCase() + '</span><span>' + m.size + '</span></div>' +
        '<p class="text-xs mt-1" style="color:var(--fg-muted);">Uploaded ' + formatDate(m.uploadedAt) + '</p></div>';

      if (mode === 'student') {
        html += '<button data-action="download-material" data-id="' + m.id + '" class="btn-primary text-xs flex-shrink-0" style="padding:8px 14px;"><i class="fas fa-download mr-1"></i>Download</button>';
      } else {
        html += '<button data-action="delete-material" data-id="' + m.id + '" class="w-8 h-8 rounded-lg flex items-center justify-center transition flex-shrink-0" style="color:var(--fg-muted);background:none;border:1px solid var(--border);cursor:pointer;"><i class="fas fa-trash text-xs"></i></button>';
      }

      html += '</div></div>';
    });

    html += '</div></div>';
  });

  return html;
}

function renderAllMaterials() {
  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + DB.materials.length + ' materials</p>' +
    '<button data-action="add-material" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Material</button></div>';

  html += renderMaterialsByCourse(DB.materials, 'admin');
  return html;
}

function renderLecturerMaterials() {
  var myCourses = DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; });
  var myMaterials = DB.materials.filter(function (m) { return myCourses.some(function (c) { return c.id === m.courseId; }); });

  var html = '<div class="flex items-center justify-between mb-6">' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + myMaterials.length + ' materials in your courses</p>' +
    '<button data-action="add-material" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Upload Material</button></div>';

  html += renderMaterialsByCourse(myMaterials, 'lecturer');
  return html;
}

function renderStudentMaterials() {
  var myCourses = DB.courses.filter(function (c) { return c.studentIds.indexOf(currentUser.id) !== -1; });
  var myMaterials = DB.materials.filter(function (m) { return myCourses.some(function (c) { return c.id === m.courseId; }); });

  var html = '<p class="text-sm mb-6" style="color:var(--fg-muted);">' + myMaterials.length + ' materials available for download</p>';
  html += renderMaterialsByCourse(myMaterials, 'student');
  return html;
}

function downloadMaterial(id) {
  var m = DB.materials.find(function (x) { return x.id === id; });
  if (!m) return;
  var c = getCourse(m.courseId);
  var text = 'Content of ' + m.title + '\n\nThis is a simulated file download for: ' + m.fileName + '\nCourse: ' + (c ? c.code + ' — ' + c.name : 'N/A') + '\nSize: ' + m.size + '\nType: ' + m.type.toUpperCase();
  var blob = new Blob([text], { type: 'text/plain' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = m.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloading ' + m.fileName);
}

function openAddMaterialModal() {
  var courses = currentUser.role === 'lecturer'
    ? DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; })
    : DB.courses;
  var body = '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Course</label>' +
    '<select id="mm-course" class="input-field"><option value="">-- Select Course --</option>';
  courses.forEach(function (c) {
    body += '<option value="' + c.id + '">' + c.code + ' — ' + escAttr(c.name) + '</option>';
  });
  body += '</select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Title</label><input id="mm-title" class="input-field" placeholder="Material title"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Type</label>' +
    '<select id="mm-type" class="input-field"><option value="pdf">PDF</option><option value="video">Video</option><option value="doc">Document</option><option value="ppt">Presentation</option><option value="zip">Archive (ZIP)</option></select></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">File Name</label><input id="mm-filename" class="input-field" placeholder="e.g. lecture_notes.pdf"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">File Size</label><input id="mm-size" class="input-field" placeholder="e.g. 2.5 MB"></div>' +
    '</div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-material" class="btn-primary text-sm">Upload</button>';
  showModal('Upload Material', body, footer);
}

async function saveMaterial() {
  var courseId = parseInt(document.getElementById('mm-course').value);
  var title = document.getElementById('mm-title').value.trim();
  var type = document.getElementById('mm-type').value;
  var fileName = document.getElementById('mm-filename').value.trim() || (title.toLowerCase().replace(/\s+/g, '_') + '.' + type);
  var size = document.getElementById('mm-size').value.trim() || '1 MB';
  if (!courseId || !title) { showToast('Course and title are required', 'error'); return; }
  var material = { id: DB.nextId.materials++, courseId: courseId, title: title, type: type, fileName: fileName, uploadedBy: currentUser.id, uploadedAt: new Date().toISOString().split('T')[0], size: size };
  DB.materials.push(material);
  if (supabaseEnabled && supabaseClient) {
    try { await syncMaterialToSupabase(material); } catch (err) { console.warn('Unable to sync material to Supabase', err); }
  }
  closeModal(); showToast('Material uploaded'); renderPage();
}

function confirmDeleteMaterial(id) {
  showModal('Confirm Deletion', '<p class="text-center">Delete this material?</p>',
    '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button class="btn-danger text-sm" onclick="doDeleteMaterial(' + id + ')">Delete</button>');
}

async function doDeleteMaterial(id) {
  DB.materials = DB.materials.filter(function (m) { return m.id !== id; });
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('materials').delete().eq('id', id);
    } catch (err) {
      console.warn('Unable to delete material from Supabase', err);
    }
  }
  closeModal(); showToast('Material deleted'); renderPage();
}

// ===== SUBMISSIONS (LECTURER) =====
function renderSubmissions() {
  var myCourses = DB.courses.filter(function (c) { return c.lecturerId === currentUser.id; });
  var myAssignments = DB.assignments.filter(function (a) { return myCourses.some(function (c) { return c.id === a.courseId; }); });
  var allSubs = DB.submissions.filter(function (s) { return myAssignments.some(function (a) { return a.id === s.assignmentId; }); });

  var html = '<p class="text-sm mb-6" style="color:var(--fg-muted);">' + allSubs.length + ' submissions for your assignments</p>';
  html += '<div class="card overflow-hidden"><div class="overflow-x-auto"><table>' +
    '<thead><tr><th>Student</th><th>Assignment</th><th>Course</th><th>Submitted</th><th>Grade</th><th>Actions</th></tr></thead><tbody>';

  allSubs.forEach(function (s) {
    var a = getAssignment(s.assignmentId);
    var c = a ? getCourse(a.courseId) : null;
    var u = getUser(s.studentId);
    html += '<tr><td><div class="flex items-center gap-2">' +
      '<div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold avatar-student">' + (u ? u.avatar : '?') + '</div>' +
      '<span class="font-medium text-sm">' + (u ? escAttr(u.name) : 'Unknown') + '</span></div></td>' +
      '<td class="text-sm">' + (a ? escAttr(a.title) : 'Unknown') + '</td>' +
      '<td><span class="text-xs font-mono" style="color:var(--accent);">' + (c ? c.code : '') + '</span></td>' +
      '<td class="text-sm" style="color:var(--fg-muted);">' + formatDate(s.submittedAt) + '</td>' +
      '<td>' + (s.grade !== null ? '<span class="font-bold" style="color:#4da358;">' + s.grade + '/' + (a ? a.maxPoints : '?') + '</span>' : '<span class="text-xs" style="color:var(--fg-muted);">Not graded</span>') + '</td>' +
      '<td><button data-action="grade-submission" data-id="' + s.id + '" class="btn-primary text-xs" style="padding:5px 12px;">' + (s.grade !== null ? 'Re-grade' : 'Grade') + '</button></td></tr>';
  });
  html += '</tbody></table></div></div>';
  return html;
}

function openGradeModal(subId) {
  var s = DB.submissions.find(function (x) { return x.id === subId; });
  if (!s) return;
  var a = getAssignment(s.assignmentId);
  var u = getUser(s.studentId);
  var body = '<div class="mb-4 p-3 rounded-lg" style="background:var(--bg);">' +
    '<p class="font-medium">' + (u ? escAttr(u.name) : 'Unknown') + '</p>' +
    '<p class="text-xs mt-1" style="color:var(--fg-muted);">' + (a ? escAttr(a.title) : '') + ' — Submitted ' + formatDate(s.submittedAt) + '</p></div>' +
    '<div class="mb-4 p-3 rounded-lg" style="background:var(--bg);">' +
    '<p class="text-sm font-medium mb-1">Submission:</p>' +
    '<p class="text-sm" style="color:var(--fg-muted);">' + escAttr(s.content) + '</p></div>' +
    '<div class="space-y-4">' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Grade (out of ' + (a ? a.maxPoints : 100) + ')</label>' +
    '<input id="gs-grade" type="number" class="input-field" min="0" max="' + (a ? a.maxPoints : 100) + '" value="' + (s.grade !== null ? s.grade : '') + '" placeholder="Enter grade"></div>' +
    '<div><label class="block text-sm font-medium mb-1" style="color:var(--fg-muted);">Feedback</label>' +
    '<textarea id="gs-feedback" class="input-field" rows="3" placeholder="Write feedback for the student">' + (s.feedback ? escAttr(s.feedback) : '') + '</textarea></div>' +
    '<input type="hidden" id="gs-id" value="' + s.id + '"></div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Cancel</button>' +
    '<button data-action="save-grade" class="btn-primary text-sm">Save Grade</button>';
  showModal('Grade Submission', body, footer);
}

function openViewSubmissionModal(subId) {
  var s = DB.submissions.find(function (x) { return x.id === subId; });
  if (!s) return;
  var a = getAssignment(s.assignmentId);
  var c = a ? getCourse(a.courseId) : null;
  var body = '<div class="mb-4 p-4 rounded-lg" style="background:var(--bg);">' +
    '<p class="font-medium">' + (a ? escAttr(a.title) : 'Unknown assignment') + '</p>' +
    '<p class="text-xs mt-1" style="color:var(--fg-muted);">' + (c ? escAttr(c.code) + ' — ' + escAttr(c.name) : '') + '</p>' +
    '<p class="text-xs mt-2" style="color:var(--fg-muted);">Submitted: ' + formatDate(s.submittedAt) + '</p>' +
    '</div>' +
    '<div class="mb-4 p-4 rounded-lg" style="background:var(--bg);">' +
    '<p class="text-sm font-medium mb-2">Submission content</p>' +
    '<p class="text-sm" style="color:var(--fg-muted); white-space:pre-wrap;">' + escAttr(s.content || 'No text submitted') + '</p>' +
    '</div>' +
    '<div class="grid grid-cols-1 gap-4 md:grid-cols-2">' +
    '<div class="p-4 rounded-lg" style="background:var(--bg);"><p class="text-sm font-medium mb-2">Grade</p><p class="text-sm" style="color:' + (s.grade !== null ? '#f4d35e' : '#e1c8bf') + ';">' + (s.grade !== null ? s.grade + '/' + (a ? a.maxPoints : '?') : 'Pending') + '</p></div>' +
    '<div class="p-4 rounded-lg" style="background:var(--bg);"><p class="text-sm font-medium mb-2">Feedback</p><p class="text-sm" style="color:var(--fg-muted);">' + (s.feedback ? escAttr(s.feedback) : 'No feedback yet') + '</p></div>' +
    '</div>';
  var footer = '<button class="btn-secondary text-sm" onclick="closeModal()">Close</button>';
  showModal('View Submission', body, footer);
}

async function saveGrade() {
  var id = parseInt(document.getElementById('gs-id').value);
  var s = DB.submissions.find(function (x) { return x.id === id; });
  if (!s) return;
  var gradeVal = document.getElementById('gs-grade').value;
  var grade = parseInt(gradeVal);
  var feedback = document.getElementById('gs-feedback').value.trim();
  if (gradeVal === '' || isNaN(grade)) { showToast('Please enter a valid grade', 'error'); return; }
  s.grade = grade;
  s.feedback = feedback;
  if (supabaseEnabled && supabaseClient) {
    try {
      await supabaseClient.from('submissions').update({
        grade: s.grade,
        feedback: s.feedback
      }).eq('id', s.id);
    } catch (err) {
      console.warn('Unable to sync grade to Supabase', err);
    }
  }
  closeModal(); showToast('Grade saved'); renderPage();
}

// ===== MY GRADES (STUDENT) =====
function renderMyGrades() {
  var mySubs = DB.submissions.filter(function (s) { return s.studentId === currentUser.id; });
  var graded = mySubs.filter(function (s) { return s.grade !== null; });
  var avg = graded.length ? Math.round(graded.reduce(function (sum, s) { return sum + s.grade; }, 0) / graded.length) : 0;

  var html = '<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">';
  html += statCard('fa-check-circle', 'rgba(244,211,103,0.15)', '#f4d35e', graded.length, 'Graded');
  html += statCard('fa-chart-line', 'rgba(255,255,255,0.12)', '#f9f5f2', avg + '%', 'Average');
  html += statCard('fa-hourglass-half', 'rgba(255,255,255,0.12)', '#f9f5f2', mySubs.filter(function (s) { return s.grade === null; }).length, 'Awaiting Grade');
  html += '</div>';

  html += '<div class="card overflow-hidden"><div class="overflow-x-auto"><table>' +
    '<thead><tr><th>Assignment</th><th>Course</th><th>Submitted</th><th>Grade</th><th>Feedback</th></tr></thead><tbody>';

  mySubs.forEach(function (s) {
    var a = getAssignment(s.assignmentId);
    var c = a ? getCourse(a.courseId) : null;
    var maxP = a ? a.maxPoints : 100;
    var gradeColor = s.grade !== null && s.grade >= maxP * 0.7 ? '#f4d35e' : '#f87171';
    html += '<tr><td class="font-medium text-sm">' + (a ? escAttr(a.title) : 'Unknown') + '</td>' +
      '<td><span class="text-xs font-mono" style="color:var(--accent);">' + (c ? c.code : '') + '</span> ' + (c ? escAttr(c.name) : '') + '</td>' +
      '<td class="text-sm" style="color:var(--fg-muted);">' + formatDate(s.submittedAt) + '</td>' +
      '<td>' + (s.grade !== null ? '<span class="font-bold" style="color:' + gradeColor + ';">' + s.grade + '/' + maxP + '</span>' : '<span class="text-xs" style="color:var(--fg-muted);">Pending</span>') + '</td>' +
      '<td class="text-sm" style="color:var(--fg-muted);">' + (s.feedback ? escAttr(s.feedback) : '—') + '</td></tr>';
  });
  html += '</tbody></table></div></div>';
  return html;
}

// ===== EVENT BINDINGS =====
initializeSupabase();

document.getElementById('login-btn').addEventListener('click', handleLogin);
document.getElementById('logout-btn').addEventListener('click', handleLogout);

document.getElementById('toggle-to-signup').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signin-form').style.display = 'none';
  document.getElementById('signin-form').classList.add('hidden');
  document.getElementById('signup-form').style.display = 'block';
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('auth-title').textContent = 'Create Account';
  document.getElementById('register-dept').innerHTML = getDepartmentOptionsHTML('');
});

document.getElementById('toggle-to-signin').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('signin-form').style.display = 'block';
  document.getElementById('signin-form').classList.remove('hidden');
  document.getElementById('auth-title').textContent = 'Sign In';
});

document.getElementById('register-btn').addEventListener('click', handleRegister);

document.getElementById('register-role').addEventListener('change', function (e) {
  var container = document.getElementById('register-index-container');
  if (e.target.value === 'student') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});

document.getElementById('sidebar-toggle').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('open');
});

document.getElementById('sidebar-backdrop').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
});

document.getElementById('login-password').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') handleLogin();
});
document.getElementById('login-email').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') document.getElementById('login-password').focus();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

function startClock() {
  function update() {
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();

    var secDeg = (sec / 60) * 360;
    var minDeg = (min / 60) * 360 + (sec / 60) * 6;
    var hrDeg = (hr / 12) * 360 + (min / 60) * 30;

    var hHand = document.getElementById('clock-hour');
    var mHand = document.getElementById('clock-min');
    var sHand = document.getElementById('clock-sec');
    var digEl = document.getElementById('digital-clock');

    if (hHand) hHand.style.transform = 'rotate(' + hrDeg + 'deg)';
    if (mHand) mHand.style.transform = 'rotate(' + minDeg + 'deg)';
    if (sHand) sHand.style.transform = 'rotate(' + secDeg + 'deg)';

    if (digEl) {
      var ampm = hr >= 12 ? 'PM' : 'AM';
      var displayHr = hr % 12;
      displayHr = displayHr ? displayHr : 12;
      var hrStr = displayHr < 10 ? '0' + displayHr : displayHr;
      var minStr = min < 10 ? '0' + min : min;
      var secStr = sec < 10 ? '0' + sec : sec;
      digEl.textContent = hrStr + ':' + minStr + ':' + secStr + ' ' + ampm;
    }
  }

  update();
  setInterval(update, 1000);
}

startClock();