/* =========================================================
   Kang Tuhi CONTACT CONFIGURATION
   ========================================================= */

/*
|--------------------------------------------------------------------------
| GANTI DATA KONTAK ANDA DI SINI
|--------------------------------------------------------------------------
|
| WhatsApp:
| Gunakan format internasional.
|
| Contoh:
| 6281234567890
|
| Jangan gunakan:
| +62
| 081234567890
| spasi
| tanda -
|
*/

const contactConfig = {
  whatsapp: "6289620055191",

  email: "tuhialkhan@gmail.com",

  instagram: "https://www.instagram.com/tubagusmuhammadtuhi",
};

/* =========================================================
   DEFAULT MESSAGE
   ========================================================= */

const defaultWhatsappMessage =
  "Halo Kang Tuhi, saya ingin mendapatkan informasi lebih lanjut.";

/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initializeContactInformation();

  initializeWhatsappButton();

  initializeContactForm();

  initializeSocialButtons();

  initializeScrollButtons();
});

/* =========================================================
   INITIALIZE CONTACT INFORMATION
   ========================================================= */

function initializeContactInformation() {
  const whatsappDisplay = document.getElementById("whatsappDisplay");

  const emailDisplay = document.getElementById("emailDisplay");

  const instagramDisplay = document.getElementById("instagramDisplay");

  /*
    |--------------------------------------------------------------------------
    | WhatsApp Display
    |--------------------------------------------------------------------------
    */

  if (whatsappDisplay) {
    whatsappDisplay.textContent = formatWhatsappNumber(contactConfig.whatsapp);
  }

  /*
    |--------------------------------------------------------------------------
    | Email Display
    |--------------------------------------------------------------------------
    */

  if (emailDisplay) {
    emailDisplay.textContent = contactConfig.email;
  }

  /*
    |--------------------------------------------------------------------------
    | Instagram Display
    |--------------------------------------------------------------------------
    */

  if (instagramDisplay) {
    instagramDisplay.textContent = getInstagramUsername(
      contactConfig.instagram,
    );
  }

  /*
    |--------------------------------------------------------------------------
    | Email Button
    |--------------------------------------------------------------------------
    */

  const emailButton = document.getElementById("emailButton");

  if (emailButton) {
    emailButton.href = `mailto:${contactConfig.email}`;
  }

  /*
    |--------------------------------------------------------------------------
    | Instagram Button
    |--------------------------------------------------------------------------
    */

  const instagramButton = document.getElementById("instagramButton");

  if (instagramButton) {
    instagramButton.href = contactConfig.instagram;
  }
}

/* =========================================================
   WHATSAPP BUTTON
   ========================================================= */

function initializeWhatsappButton() {
  const whatsappButton = document.getElementById("whatsappButton");

  if (!whatsappButton) {
    return;
  }

  whatsappButton.addEventListener("click", function () {
    openWhatsapp(defaultWhatsappMessage);
  });
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    const email = document.getElementById("contactEmail").value.trim();

    const subject = document.getElementById("contactSubject").value;

    const message = document.getElementById("contactMessage").value.trim();

    /*
            |--------------------------------------------------------------------------
            | Create WhatsApp Message
            |--------------------------------------------------------------------------
            */

    const whatsappMessage = `Halo Kang Tuhi 👋

Saya ingin menghubungi Anda melalui website.

👤 Nama:
${name}

📧 Email:
${email}

📌 Subjek:
${subject}

💬 Pesan:
${message}

Terima kasih.`;

    /*
            |--------------------------------------------------------------------------
            | Show Toast
            |--------------------------------------------------------------------------
            */

    showContactToast();

    /*
            |--------------------------------------------------------------------------
            | Open WhatsApp
            |--------------------------------------------------------------------------
            */

    setTimeout(function () {
      openWhatsapp(whatsappMessage);
    }, 700);
  });
}

/* =========================================================
   SOCIAL BUTTONS
   ========================================================= */

function initializeSocialButtons() {
  /*
    |--------------------------------------------------------------------------
    | WhatsApp
    |--------------------------------------------------------------------------
    */

  const socialWhatsapp = document.getElementById("socialWhatsapp");

  if (socialWhatsapp) {
    socialWhatsapp.href = createWhatsappUrl(defaultWhatsappMessage);
  }

  /*
    |--------------------------------------------------------------------------
    | Email
    |--------------------------------------------------------------------------
    */

  const socialEmail = document.getElementById("socialEmail");

  if (socialEmail) {
    socialEmail.href = `mailto:${contactConfig.email}`;
  }

  /*
    |--------------------------------------------------------------------------
    | Instagram
    |--------------------------------------------------------------------------
    */

  const socialInstagram = document.getElementById("socialInstagram");

  if (socialInstagram) {
    socialInstagram.href = contactConfig.instagram;
  }
}

/* =========================================================
   SCROLL BUTTONS
   ========================================================= */

function initializeScrollButtons() {
  const scrollToSocial = document.getElementById("scrollToSocial");

  if (scrollToSocial) {
    scrollToSocial.addEventListener("click", function () {
      document.getElementById("socialSection").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

/* =========================================================
   OPEN WHATSAPP
   ========================================================= */

function openWhatsapp(message) {
  const whatsappUrl = createWhatsappUrl(message);

  window.open(whatsappUrl, "_blank", "noopener");
}

/* =========================================================
   CREATE WHATSAPP URL
   ========================================================= */

function createWhatsappUrl(message) {
  const phone = contactConfig.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phone}` + `?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   FORMAT WHATSAPP NUMBER
   ========================================================= */

function formatWhatsappNumber(number) {
  let phone = number.replace(/\D/g, "");

  if (phone.startsWith("62")) {
    phone = phone.substring(2);
  }

  return "+62 " + phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
}

/* =========================================================
   GET INSTAGRAM USERNAME
   ========================================================= */

function getInstagramUsername(url) {
  try {
    const cleanUrl = url
      .replace("https://www.instagram.com/", "")
      .replace("https://instagram.com/", "")
      .replace(/\/$/, "");

    return "@" + cleanUrl;
  } catch (error) {
    return url;
  }
}

/* =========================================================
   SHOW TOAST
   ========================================================= */

function showContactToast() {
  const toastElement = document.getElementById("contactToast");

  if (!toastElement) {
    return;
  }

  const toast = new bootstrap.Toast(toastElement, {
    delay: 2500,
  });

  toast.show();
}
