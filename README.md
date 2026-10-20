# Học Liệu Số Tương Tác Môn Tin Học Lớp 6
**Học phần:** Hồ sơ Tốt nghiệp – Ngành Sư phạm Tin học (Khóa 49)  
**Đơn vị:** Khoa Công nghệ Thông tin – Trường Đại học Sư phạm Thành phố Hồ Chí Minh (HCMUE)

---

## 1. Đặt vấn đề và Mục tiêu nghiên cứu
Chương trình Giáo dục phổ thông môn Tin học năm 2018 ở cấp Trung học cơ sở chú trọng phát triển năng lực giải quyết vấn đề, tư duy thuật toán và học vấn số thông qua các hoạt động học tập tích cực. Đối với học sinh lớp 6 (lứa tuổi 11–12), việc chuyển các khái niệm trừu tượng như *biểu diễn dữ liệu nhị phân*, *mạng máy tính*, *cấu trúc điều khiển* hay *sơ đồ khối* thành các hoạt động thao tác trực quan đóng vai trò quyết định đến hiệu quả tiếp thu.

Dự án này xây dựng bộ học liệu web tĩnh (Static Educational Web Platform) bám sát sách giáo khoa **Tin học 6 – Bộ sách Kết nối tri thức với cuộc sống**, phục vụ hai mục đích:
1. **Hỗ trợ giáo viên trên lớp:** Cung cấp các phiếu hoạt động khởi động, mô phỏng sơ đồ khối và trò chơi củng cố kiến thức để trình chiếu trực tiếp trên bảng tương tác hoặc máy chiếu phòng máy.
2. **Hỗ trợ học sinh tự học:** Cung cấp hệ thống lý thuyết cô đọng theo 4 bước sư phạm (*Khởi động – Khám phá – Luyện tập – Vận dụng*), từ điển thuật ngữ chuẩn hóa và hệ thống lưu tiến độ học tập cá nhân trên trình duyệt.

---

## 2. Cấu trúc Chương trình và Phân bổ Mạch kiến thức
Toàn bộ 17 bài học được tổ chức theo 6 chủ đề, phản ánh đầy đủ 3 mạch kiến thức cốt lõi của Chương trình GDPT 2018:
- **CS (Computer Science – Khoa học máy tính):** Tập trung ở Chủ đề 1 (Bài 1–3) và Chủ đề 6 (Bài 15–17).
- **ICT (Information and Communication Technology – Định hướng ứng dụng):** Tập trung ở Chủ đề 2 (Bài 4–5), Chủ đề 3 (Bài 6–8) và Chủ đề 5 (Bài 10–14).
- **DL (Digital Literacy – Học vấn số hóa phổ thông):** Trọng tâm ở Chủ đề 4 (Bài 9) và lồng ghép xuyên suốt các bài học về Internet.

---

## 3. Kiến trúc Thư mục Dự án

```text
K49.SPTIN.B-SPNC-KhuonHD/
├── index.html                                # Trang chủ: Mục lục 6 chủ đề, lọc theo mạch CS/ICT/DL & theo dõi tiến độ
├── dictionary.html                           # Từ điển tra cứu thuật ngữ Tin học 6 theo chủ đề
├── crossword.html                            # Trò chơi ô chữ ôn tập thuật ngữ theo từng bài học
├── algorithm.html                            # Công cụ mô phỏng từng bước Sơ đồ khối & Cấu trúc điều khiển
├── lesson-template.html                      # Khung bài học chuẩn Công văn 5512 (4 hoạt động sư phạm)
├── bai-1-thong-tin-va-du-lieu.html           # Hệ thống 17 trang bài học chi tiết (Bài 1 -> Bài 17)
├── ...
├── bai-17-chuong-trinh-may-tinh.html
└── assets/
    ├── css/
    │   └── style.css                         # Hệ thống thiết kế chung (Editorial Textbook Design System)
    ├── js/
    │   ├── main.js                           # Quản lý dữ liệu chương trình, lọc bài học, LocalStorage & đồng bộ iframe
    │   ├── glossary-data.js                  # Cơ sở dữ liệu thuật ngữ chuẩn SGK Tin học 6
    │   ├── dictionary.js                     # Logic tìm kiếm & phân nhóm từ điển
    │   ├── crossword.js                      # Sinh lưới ô chữ tự động từ bộ dữ liệu thuật ngữ
    │   └── algorithm.js                      # Bộ máy thực thi từng bước (Step-by-step runner) cho sơ đồ khối
    ├── games/
    │   ├── game-shared.css                   # Stylesheet đồng bộ giao diện cho toàn bộ phiếu bài tập nhúng
    │   └── bai-*.html                        # Các hoạt động tương tác nhúng trong bài học
    └── images/
        └── Logo HCMUE.svg                    # Huy hiệu Trường Đại học Sư phạm TP.HCM

```


### 4. Hướng dẫn Triển khai và Sử dụng

- Dự án được xây dựng bằng HTML5 ngữ nghĩa, CSS3 thuần (sử dụng Custom Properties) và Vanilla JavaScript (ES6+), không phụ thuộc vào framework bên ngoài để đảm bảo tốc độ tải tức thì trên cấu hình máy tính phòng thực hành trường THCS.

- Sao chép kho lưu trữ về máy:

```git
git clone https://github.com/TonyTheSlacker/K49.SPTIN.B-SPNC-KhuonHD.git
cd K49.SPTIN.B-SPNC-KhuonHD
```

- Khởi chạy bằng trình chủ tĩnh bất kỳ (ví dụ Live Server trên VS Code hoặc Python HTTP Server):

```shell
python3 -m http.server 8080
```
