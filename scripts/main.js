document.addEventListener("alpine:init", () => {
    Alpine.data("navbar", () => ({
        open: false,
        menus: [
            {
                name: "Beranda",
                link: "index.html",
            },
            {
                name: "Profil",
                child: [
                    {
                        name: "Visi Misi",
                        link: "single.html",
                    },
                    {
                        name: "Struktur Organisasi",
                        link: "single.html",
                    },
                    {
                        name: "Tata Nilai",
                        link: "single.html",
                    },
                    {
                        name: "Motto",
                        link: "single.html",
                    },
                    {
                        name: "Hak dan Kewajiban Pasien",
                        link: "single.html",
                    },
                ],
            },
            {
                name: "Pelayanan",
                child: [
                    {
                        name: "Pendaftaran",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Pemeriksaan Umum",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Pemeriksaan Lansia",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Kesehatan Gigi dan Mulut",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Kesehatan Ibu dan KB",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Kesehatan Anak",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Gizi",
                        link: "single.html",
                    },
                    {
                        name: "Klinik Sanitasi",
                        link: "single.html",
                    },
                    {
                        name: "Kefarmasian",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan UGD",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Rawat Inap",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Laboratorium",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan TB",
                        link: "single.html",
                    },
                    {
                        name: "Tata Usaha",
                        link: "single.html",
                    },
                ],
            },
            {
                name: "Informasi",
                child: [
                    {
                        name: "Pengumuman",
                        link: "list.html",
                    },
                    {
                        name: "Berita",
                        link: "list.html",
                    },
                ],
            },
            {
                name: "Sarana dan Prasarana",
                link: "gallery.html",
            },
            {
                name: "Program UKM",
                child: [
                    {
                        name: "Pelayanan Promosi Kesehatan (PROMKES)",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Kesehatan Keluarga (KIA dan KB)",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Gizi",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Kesehatan Lingkungan (KESLING)",
                        link: "single.html",
                    },
                    {
                        name: "Pelayanan Pencegahan dan Pengendalian Penyakit (P2P)",
                        link: "single.html",
                    },
                ],
            },
            {
                name: "Layanan Pengaduan",
                link: "single.html",
            },
        ],
    }));

    Alpine.data("carousel", () => ({
        selected: 0,
        items: [
            {
                subtitle_top: "Selamat Datang di Website",
                title: "UPTD Puskesmas Lampia",
                subtitle_bottom: "",
                image: "images/bg.JPG",
            },
            {
                subtitle_top: "",
                title: "Staff UPTD Puskesmas Lampia",
                subtitle_bottom: "Ramah, Tanggung Jawab, Profesional",
                image: "images/bg.JPG",
            },
            {
                subtitle_top: "Selamat Datang di",
                title: "UPTD Puskesmas Lampia",
                subtitle_bottom: "Website ini masih prototype",
                image: "images/bg2.jpeg",
            },
        ],
        init() {
            this.$watch("selected", (v) => {
                this.items.forEach((item, i) => {
                    const c = document.getElementById(`carouselItem${i}`);
                    c.classList.remove("current");
                    c.classList.remove("prev");
                    c.classList.remove("next");
                });

                const current = Number(v);
                const prev = Number(Number(v) - 1 >= 0 ? Number(v) - 1 : this.items.length - 1);
                const next = Number(Number(v) + 1 <= this.items.length - 1 ? Number(v) + 1 : 0);

                document.getElementById(`carouselItem${current}`).classList.add("current");
                document.getElementById(`carouselItem${prev}`).classList.add("prev");
                document.getElementById(`carouselItem${next}`).classList.add("next");
            });

            this.selected = 1;
            this.selected = 0;

            setInterval(() => {
                if (this.selected + 1 <= this.items.length - 1) {
                    this.selected++;
                } else {
                    this.selected = 0;
                }
            }, 10000);
        },
    }));
});