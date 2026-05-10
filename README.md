# Portfolio Template — Hướng dẫn sử dụng

## Cấu trúc thư mục
```
portfolio/
├── index.html        ← Nội dung trang (thay thông tin của bạn ở đây)
├── style.css         ← Thiết kế, màu sắc, layout
├── script.js         ← Hiệu ứng tương tác
├── README.md         ← File này
└── images/
    ├── avatar/
    │   └── photo.jpg  ← Ảnh của bạn (thay ảnh vào đây)
    └── projects/
        ├── p1.png     ← Ảnh thumbnail dự án 1
        ├── p2.png     ← Ảnh thumbnail dự án 2
        └── ...
```

---

## Cách tùy chỉnh

### 1. Thay thông tin cá nhân trong `index.html`
Tìm và thay các chỗ sau:
- `Tên Bạn` → tên thật của bạn
- `YN.DEV` → viết tắt tên bạn (ví dụ: NGH.DEV)
- `Sinh viên Khoa học Máy tính · Đại học ABC` → ngành + trường của bạn
- `Nguyễn Văn A.` → tên bạn
- `GPA 3.7` → GPA của bạn
- Phần mô tả về bản thân
- Email, LinkedIn, GitHub

### 2. Thay màu sắc chủ đạo trong `style.css`
Tìm phần `:root` ở đầu file, thay `--accent` và `--accent-dark`:
```css
--accent: #c8a96e;       /* Màu vàng đồng — thay màu khác nếu muốn */
--accent-dark: #a88748;
```
Gợi ý màu:
- Xanh navy: `#2563eb` / `#1d4ed8`
- Xanh lá: `#059669` / `#047857`
- Tím: `#7c3aed` / `#6d28d9`
- Đỏ đất: `#dc2626` / `#b91c1c`

### 3. Thêm dự án
Copy một block `<article class="project-card">` trong `index.html` và thay nội dung.

### 4. Thêm ảnh
- Ảnh đại diện: đặt vào `images/avatar/photo.jpg`
- Ảnh dự án: đặt vào `images/projects/p1.png`, `p2.png`, ...

---

## Deploy lên GitHub Pages (miễn phí)

### Bước 1: Tạo repo trên GitHub
1. Vào github.com → New repository
2. Đặt tên: `portfolio` (hoặc tên bất kỳ)
3. Chọn Public → Create

### Bước 2: Upload code
```bash
# Trong thư mục portfolio, mở terminal:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages
1. Vào repo → Settings → Pages (cột bên trái)
2. Source: chọn **Deploy from a branch**
3. Branch: **main** → **/ (root)** → Save
4. Chờ 1-2 phút → link của bạn sẽ là:
   `https://USERNAME.github.io/portfolio`

---

## Tài nguyên học thêm
- HTML/CSS cơ bản: https://www.w3schools.com
- Tài liệu chính thức: https://developer.mozilla.org/vi
- CSS hiệu ứng: https://css-tricks.com
- Font chữ miễn phí: https://fonts.google.com
- Icon miễn phí: https://tabler-icons.io
