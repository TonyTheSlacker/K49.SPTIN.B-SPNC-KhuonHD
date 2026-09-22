const lessons = [
  { number: 1, title: 'Thông tin và dữ liệu', href: 'bai-1-thong-tin-va-du-lieu.html' },
  { number: 2, title: 'Xử lí thông tin', href: 'bai-2-xu-li-thong-tin.html' },
  { number: 3, title: 'Thông tin trong máy tính', href: 'bai-3-thong-tin-trong-may-tinh.html' },
  { number: 4, title: 'Mạng máy tính', href: 'bai-4-mang-may-tinh.html' },
  { number: 5, title: 'Internet', href: 'bai-5-internet.html' },
  { number: 6, title: 'Mạng thông tin toàn cầu', href: 'bai-6-mang-thong-tin-toan-cau.html' },
  { number: 7, title: 'Tìm kiếm thông tin trên Internet', href: 'bai-7-tim-kiem-thong-tin-tren-internet.html' },
  { number: 8, title: 'Thư điện tử', href: 'bai-8-thu-dien-tu.html' },
  { number: 9, title: 'An toàn thông tin trên Internet', href: 'bai-9-an-toan-thong-tin-tren-internet.html' },
  { number: 10, title: 'Sơ đồ tư duy', href: 'bai-10-so-do-tu-duy.html' },
  { number: 11, title: 'Định dạng văn bản', href: 'bai-11-dinh-dang-van-ban.html' },
  { number: 12, title: 'Trình bày thông tin ở dạng bảng', href: 'bai-12-trinh-bay-thong-tin-o-dang-bang.html' },
  { number: 13, title: 'Tìm kiếm và thay thế', href: 'bai-13-tim-kiem-va-thay-the.html' },
  { number: 14, title: 'Thực hành tổng hợp: Hoàn thiện sổ lưu niệm', href: 'bai-14-thuc-hanh-tong-hop-hoan-thien-so-luu-niem.html' },
  { number: 15, title: 'Thuật toán', href: 'bai-15-thuat-toan.html' },
  { number: 16, title: 'Các cấu trúc điều khiển', href: 'bai-16-cac-cau-truc-dieu-khien.html' },
  { number: 17, title: 'Chương trình máy tính', href: 'bai-17-chuong-trinh-may-tinh.html' }
];

const glossary = [
  { lesson: 1, term: 'Thông tin', definition: 'Những gì đem lại hiểu biết cho con người về sự vật, sự việc xung quanh, ví dụ tin nhắn báo trời sắp mưa.' },
  { lesson: 1, term: 'Dữ liệu', definition: 'Các con số, chữ viết, hình ảnh, âm thanh... được ghi lại và dùng để tạo ra thông tin.' },
  { lesson: 1, term: 'Vật mang tin', definition: 'Vật dùng để lưu và truyền dữ liệu như quyển sách, tấm ảnh, thẻ nhớ, đĩa CD.' },
  { lesson: 1, term: 'Tin học', definition: 'Môn học về cách thu thập, lưu trữ và xử lí thông tin bằng máy tính.' },

  { lesson: 2, term: 'Xử lí thông tin', definition: 'Biến thông tin đã thu nhận thành hiểu biết hoặc kết quả mới, ví dụ tính điểm trung bình từ các điểm số.' },
  { lesson: 2, term: 'Thu nhận thông tin', definition: 'Bước nhận thông tin từ bên ngoài bằng giác quan của con người hoặc thiết bị vào của máy tính.' },
  { lesson: 2, term: 'Lưu trữ thông tin', definition: 'Bước ghi lại thông tin để dùng lại về sau, ví dụ ghi vào vở hoặc lưu vào máy tính.' },
  { lesson: 2, term: 'Truyền thông tin', definition: 'Bước đưa thông tin từ người này, nơi này đến người khác, nơi khác.' },
  { lesson: 2, term: 'Thiết bị vào - thiết bị ra', definition: 'Thiết bị vào đưa dữ liệu vào máy tính (bàn phím, chuột); thiết bị ra đưa kết quả tới người dùng (màn hình, loa).' },

  { lesson: 3, term: 'Bit', definition: 'Đơn vị nhỏ nhất để lưu thông tin trong máy tính, chỉ nhận một trong hai giá trị 0 hoặc 1.' },
  { lesson: 3, term: 'Dãy bit', definition: 'Chuỗi các số 0 và 1 mà máy tính dùng để biểu diễn chữ, số, hình ảnh hay âm thanh.' },
  { lesson: 3, term: 'Byte', definition: 'Đơn vị đo dung lượng gồm 8 bit, thường đủ để lưu một kí tự.' },
  { lesson: 3, term: 'KB, MB, GB', definition: 'Các đơn vị đo dung lượng lớn hơn byte: 1 KB ≈ 1024 byte, 1 MB ≈ 1024 KB, 1 GB ≈ 1024 MB.' },

  { lesson: 4, term: 'Mạng máy tính', definition: 'Nhiều máy tính và thiết bị được nối với nhau để trao đổi dữ liệu và dùng chung tài nguyên.' },
  { lesson: 4, term: 'Thiết bị đầu cuối', definition: 'Thiết bị người dùng trực tiếp sử dụng trong mạng như máy tính, điện thoại, máy in.' },
  { lesson: 4, term: 'Thiết bị kết nối', definition: 'Thiết bị giúp các máy nối được với nhau như bộ định tuyến (router), bộ chia (switch), cáp mạng.' },
  { lesson: 4, term: 'Mạng có dây và không dây', definition: 'Mạng có dây dùng cáp để nối thiết bị; mạng không dây truyền dữ liệu qua sóng, ví dụ Wi-Fi.' },

  { lesson: 5, term: 'Internet', definition: 'Mạng kết nối rất nhiều máy tính trên khắp thế giới để chia sẻ thông tin và liên lạc.' },
  { lesson: 5, term: 'Nhà cung cấp dịch vụ Internet', definition: 'Công ty cung cấp đường truyền để gia đình, trường học kết nối được vào Internet.' },
  { lesson: 5, term: 'Wi-Fi', definition: 'Cách kết nối Internet không dây trong phạm vi gần, thường qua một bộ phát sóng.' },
  { lesson: 5, term: 'Dịch vụ trực tuyến', definition: 'Các dịch vụ dùng được nhờ Internet như học trực tuyến, xem phim, gọi video, mua hàng.' },

  { lesson: 6, term: 'World Wide Web (WWW)', definition: 'Kho trang web khổng lồ trên Internet mà em có thể xem bằng trình duyệt.' },
  { lesson: 6, term: 'Trang web', definition: 'Một trang nội dung gồm chữ, hình ảnh, video... được hiển thị trong trình duyệt.' },
  { lesson: 6, term: 'Website', definition: 'Tập hợp nhiều trang web liên quan nằm chung một địa chỉ, ví dụ trang của trường em.' },
  { lesson: 6, term: 'Địa chỉ web (URL)', definition: 'Dòng địa chỉ dùng để mở đúng một trang web, ví dụ https://vi.wikipedia.org.' },
  { lesson: 6, term: 'Siêu liên kết', definition: 'Phần chữ hoặc hình có thể nhấn vào để chuyển sang một trang web khác.' },
  { lesson: 6, term: 'Trình duyệt web', definition: 'Phần mềm giúp em mở và xem các trang web trên Internet.' },

  { lesson: 7, term: 'Máy tìm kiếm', definition: 'Trang web giúp tìm thông tin trên Internet theo từ khóa, ví dụ Google, Bing, Cốc Cốc.' },
  { lesson: 7, term: 'Từ khóa', definition: 'Từ hoặc cụm từ ngắn gọn em gõ vào ô tìm kiếm để mô tả điều mình muốn tìm.' },
  { lesson: 7, term: 'Kết quả tìm kiếm', definition: 'Danh sách các trang web mà máy tìm kiếm cho là phù hợp với từ khóa.' },
  { lesson: 7, term: 'Nguồn tin đáng tin cậy', definition: 'Trang thông tin rõ nguồn gốc, do cơ quan hoặc tác giả uy tín đăng, có thể kiểm chứng được.' },

  { lesson: 8, term: 'Thư điện tử (email)', definition: 'Thư được soạn và gửi qua Internet, tới nơi nhận gần như ngay lập tức.' },
  { lesson: 8, term: 'Địa chỉ thư điện tử', definition: 'Địa chỉ nhận thư có dạng tên_người_dùng@tên_máy_chủ, ví dụ hocsinh6a@gmail.com.' },
  { lesson: 8, term: 'Hộp thư đến', definition: 'Nơi chứa những thư điện tử người khác gửi cho em.' },
  { lesson: 8, term: 'Tệp đính kèm', definition: 'Tệp (bài làm, ảnh, video) được gửi kèm theo nội dung thư.' },
  { lesson: 8, term: 'Thư rác', definition: 'Thư quảng cáo hoặc lừa đảo gửi hàng loạt, không nên mở liên kết bên trong.' },

  { lesson: 9, term: 'An toàn thông tin', definition: 'Biết cách bảo vệ dữ liệu cá nhân, mật khẩu và tránh các trang web không an toàn.' },
  { lesson: 9, term: 'Thông tin cá nhân', definition: 'Những thông tin riêng như họ tên, địa chỉ, số điện thoại, ảnh, mật khẩu, không nên chia sẻ tùy tiện.' },
  { lesson: 9, term: 'Mật khẩu mạnh', definition: 'Mật khẩu dài, có chữ hoa, chữ thường, số và kí tự đặc biệt, khó bị người khác đoán ra.' },
  { lesson: 9, term: 'Phần mềm độc hại', definition: 'Phần mềm gây hại cho máy tính và dữ liệu, ví dụ virus, thường lây qua tệp và liên kết lạ.' },
  { lesson: 9, term: 'Phần mềm diệt virus', definition: 'Phần mềm giúp phát hiện và loại bỏ phần mềm độc hại trên máy tính.' },

  { lesson: 10, term: 'Sơ đồ tư duy', definition: 'Cách ghi chép bằng hình vẽ, sắp xếp ý tưởng quanh một chủ đề trung tâm cho dễ nhớ.' },
  { lesson: 10, term: 'Chủ đề trung tâm', definition: 'Ý chính đặt ở giữa sơ đồ tư duy, các nhánh khác tỏa ra từ đây.' },
  { lesson: 10, term: 'Nhánh', definition: 'Đường nối từ chủ đề trung tâm tới các ý nhỏ hơn, thể hiện quan hệ giữa các ý.' },
  { lesson: 10, term: 'Từ khóa trong sơ đồ', definition: 'Từ ngắn gọn ghi trên mỗi nhánh thay cho cả câu dài, giúp sơ đồ gọn và dễ nhìn.' },

  { lesson: 11, term: 'Định dạng văn bản', definition: 'Thay đổi cách trình bày văn bản để bài viết rõ ràng, đẹp và dễ đọc hơn.' },
  { lesson: 11, term: 'Định dạng kí tự', definition: 'Chỉnh phông chữ, cỡ chữ, màu chữ, chữ đậm, nghiêng, gạch chân cho từng chữ.' },
  { lesson: 11, term: 'Định dạng đoạn văn', definition: 'Chỉnh căn lề, khoảng cách dòng, thụt đầu dòng cho cả đoạn.' },
  { lesson: 11, term: 'Phông chữ và cỡ chữ', definition: 'Phông chữ là kiểu chữ (ví dụ Times New Roman); cỡ chữ là độ lớn của chữ.' },
  { lesson: 11, term: 'Căn lề', definition: 'Cách xếp chữ trong đoạn: căn trái, căn giữa, căn phải hoặc căn đều hai bên.' },

  { lesson: 12, term: 'Bảng', definition: 'Cách trình bày thông tin theo hàng và cột để dễ so sánh, dễ tra cứu.' },
  { lesson: 12, term: 'Hàng', definition: 'Dãy ô nằm ngang trong bảng, thường chứa thông tin của một đối tượng.' },
  { lesson: 12, term: 'Cột', definition: 'Dãy ô thẳng đứng trong bảng, thường chứa cùng một loại thông tin.' },
  { lesson: 12, term: 'Ô', definition: 'Phần giao nhau giữa một hàng và một cột, là nơi nhập nội dung.' },

  { lesson: 13, term: 'Tìm kiếm (Find)', definition: 'Công cụ giúp tìm nhanh một từ hoặc cụm từ trong văn bản dài.' },
  { lesson: 13, term: 'Thay thế (Replace)', definition: 'Công cụ đổi từ đã tìm được thành từ mới.' },
  { lesson: 13, term: 'Thay thế tất cả', definition: 'Lệnh đổi cùng lúc mọi vị trí xuất hiện của từ cần sửa, nên kiểm tra lại kết quả sau khi dùng.' },

  { lesson: 14, term: 'Sổ lưu niệm', definition: 'Sản phẩm thực hành tổng hợp gồm nhiều trang giới thiệu về lớp, bạn bè và kỉ niệm.' },
  { lesson: 14, term: 'Trang bìa', definition: 'Trang đầu tiên của sản phẩm, thường có tên, hình ảnh và thông tin nhóm thực hiện.' },
  { lesson: 14, term: 'Bố cục trang', definition: 'Cách sắp xếp chữ, hình ảnh và bảng trên trang sao cho cân đối, dễ đọc.' },

  { lesson: 15, term: 'Thuật toán', definition: 'Các bước làm việc được sắp xếp theo thứ tự để giải quyết một vấn đề.' },
  { lesson: 15, term: 'Đầu vào (Input)', definition: 'Những thông tin đã biết, được đưa vào khi bắt đầu thực hiện thuật toán.' },
  { lesson: 15, term: 'Đầu ra (Output)', definition: 'Kết quả nhận được sau khi thực hiện xong thuật toán.' },
  { lesson: 15, term: 'Sơ đồ khối', definition: 'Cách mô tả thuật toán bằng các hình khối và mũi tên chỉ thứ tự thực hiện.' },

  { lesson: 16, term: 'Cấu trúc tuần tự', definition: 'Các bước được thực hiện lần lượt từ trên xuống, hết bước này tới bước kia.' },
  { lesson: 16, term: 'Cấu trúc rẽ nhánh', definition: 'Tùy điều kiện đúng hay sai mà chọn làm việc này hoặc việc kia.' },
  { lesson: 16, term: 'Cấu trúc lặp', definition: 'Lặp lại một hoặc nhiều bước nhiều lần cho tới khi đạt yêu cầu.' },
  { lesson: 16, term: 'Điều kiện', definition: 'Câu hỏi chỉ có câu trả lời đúng hoặc sai, dùng để quyết định hướng đi của thuật toán.' },

  { lesson: 17, term: 'Chương trình máy tính', definition: 'Dãy lệnh viết cho máy tính thực hiện một thuật toán.' },
  { lesson: 17, term: 'Ngôn ngữ lập trình', definition: 'Ngôn ngữ dùng để viết chương trình cho máy tính hiểu và thực hiện.' },
  { lesson: 17, term: 'Scratch', definition: 'Môi trường lập trình trực quan, ghép các khối lệnh để tạo chương trình.' },
  { lesson: 17, term: 'Khối lệnh', definition: 'Mảnh lệnh trong Scratch, ghép lại với nhau thành chương trình hoàn chỉnh.' },
  { lesson: 17, term: 'Chạy chương trình', definition: 'Cho máy tính thực hiện chương trình để xem kết quả và phát hiện lỗi.' }
];

const ALL_LESSONS = 'Tất cả';

let state = {
  query: '',
  lesson: ALL_LESSONS
};

const dictionaryGrid = document.getElementById('dictionaryGrid');
const emptyState = document.getElementById('emptyState');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const lessonFilters = document.getElementById('lessonFilters');

function getLesson(number) {
  return lessons.find((lesson) => lesson.number === number);
}

function getLessonLabel(number) {
  return `Bài ${number}`;
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase('vi-VN')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

function renderFilters() {
  if (!lessonFilters) return;

  const fragment = document.createDocumentFragment();
  const options = [ALL_LESSONS, ...lessons.map((lesson) => lesson.number)];

  options.forEach((option) => {
    const label = option === ALL_LESSONS ? ALL_LESSONS : getLessonLabel(option);
    const button = document.createElement('button');
    button.className = 'filter-pill';
    button.type = 'button';
    button.dataset.lesson = String(option);
    button.setAttribute('aria-controls', 'dictionaryGrid');
    button.setAttribute('aria-pressed', String(option === state.lesson));
    button.textContent = label;
    if (option !== ALL_LESSONS) {
      button.title = `Bài ${option}. ${getLesson(option).title}`;
    }
    button.addEventListener('click', () => {
      state = { ...state, lesson: option };
      updateFilterButtons();
      renderGlossary();
    });
    fragment.append(button);
  });

  lessonFilters.replaceChildren(fragment);
}

function updateFilterButtons() {
  lessonFilters?.querySelectorAll('.filter-pill').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lesson === String(state.lesson)));
  });
}

function getFilteredGlossary() {
  const query = normalizeText(state.query.trim());

  return glossary.filter((item) => {
    const lesson = getLesson(item.lesson);
    const searchableText = [item.term, item.definition, lesson.title, getLessonLabel(item.lesson)]
      .map(normalizeText)
      .join(' ');

    const matchesQuery = !query || searchableText.includes(query);
    const matchesLesson = state.lesson === ALL_LESSONS || item.lesson === state.lesson;

    return matchesQuery && matchesLesson;
  });
}

function createTermCard(item, index) {
  const card = document.createElement('article');
  card.className = 'term-card';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = getLessonLabel(item.lesson);

  const heading = document.createElement('h3');
  heading.id = `term-${item.lesson}-${index + 1}`;
  heading.textContent = item.term;

  const definition = document.createElement('p');
  definition.textContent = item.definition;

  card.setAttribute('aria-labelledby', heading.id);
  card.append(tag, heading, definition);

  return card;
}

function createLessonSection(lesson, items) {
  const section = document.createElement('section');
  section.className = 'lesson-terms';
  section.setAttribute('aria-labelledby', `lesson-terms-${lesson.number}`);

  const header = document.createElement('div');
  header.className = 'lesson-terms__header';

  const heading = document.createElement('h3');
  heading.id = `lesson-terms-${lesson.number}`;
  heading.textContent = `Bài ${lesson.number}. ${lesson.title}`;

  const count = document.createElement('span');
  count.className = 'lesson-terms__count';
  count.textContent = `${items.length} thuật ngữ`;

  const link = document.createElement('a');
  link.className = 'lesson-terms__link';
  link.href = lesson.href;
  link.textContent = 'Mở bài học';

  header.append(heading, count, link);

  const grid = document.createElement('div');
  grid.className = 'dictionary-grid';
  items.forEach((item, index) => grid.append(createTermCard(item, index)));

  section.append(header, grid);

  return section;
}

function renderGlossary() {
  if (!dictionaryGrid) return;

  const filtered = getFilteredGlossary();
  const fragment = document.createDocumentFragment();
  dictionaryGrid.setAttribute('aria-busy', 'true');

  lessons.forEach((lesson) => {
    const items = filtered.filter((item) => item.lesson === lesson.number);
    if (items.length === 0) return;
    fragment.append(createLessonSection(lesson, items));
  });

  dictionaryGrid.replaceChildren(fragment);
  dictionaryGrid.setAttribute('aria-busy', 'false');

  if (emptyState) emptyState.hidden = filtered.length > 0;
  if (resultCount) {
    resultCount.textContent = `Đang hiển thị ${filtered.length} thuật ngữ`;
  }
}

searchInput?.addEventListener('input', (event) => {
  state = { ...state, query: event.target.value };
  renderGlossary();
});

searchInput?.setAttribute('aria-controls', 'dictionaryGrid');
lessonFilters?.setAttribute('role', 'group');
emptyState?.setAttribute('role', 'status');

renderFilters();
renderGlossary();
