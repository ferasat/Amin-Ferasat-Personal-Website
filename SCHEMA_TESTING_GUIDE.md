# راهنمای تست Schema Markup با Google Rich Results Test

## 🔍 ابزارهای تست

### 1. Google Rich Results Test
- **URL**: https://search.google.com/test/rich-results
- **کاربرد**: تست Schema های مختلف و نمایش نتایج غنی

### 2. Google Structured Data Testing Tool (منسوخ شده)
- **جایگزین**: Rich Results Test

### 3. Schema.org Validator
- **URL**: https://validator.schema.org/
- **کاربرد**: اعتبارسنجی کامل Schema

## 📋 مراحل تست

### مرحله 1: تست URL
1. به https://search.google.com/test/rich-results بروید
2. URL وب‌سایت خود را وارد کنید
3. روی "Test URL" کلیک کنید
4. منتظر نتایج باشید

### مرحله 2: تست کد HTML
1. کد HTML صفحه را کپی کنید
2. در تب "Code" کد را paste کنید
3. روی "Test Code" کلیک کنید

### مرحله 3: بررسی نتایج
- ✅ **Valid**: Schema صحیح است
- ⚠️ **Warning**: هشدارهای غیرضروری
- ❌ **Error**: خطاهای حیاتی

## 🎯 Schema های قابل تست

### 1. Website Schema
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "وب‌سایت شخصی برنامه‌نویس",
  "url": "https://example.com"
}
\`\`\`

### 2. Person Schema
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "نام برنامه‌نویس",
  "jobTitle": "برنامه‌نویس بک‌اند"
}
\`\`\`

### 3. LocalBusiness Schema
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "وب‌سایت شخصی برنامه‌نویس",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "تهران"
  }
}
\`\`\`

### 4. Article Schema
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "عنوان مقاله",
  "author": {
    "@type": "Person",
    "name": "نام نویسنده"
  }
}
\`\`\`

## 🚨 خطاهای رایج

### 1. Missing Required Properties
- **مشکل**: خصوصیات اجباری موجود نیست
- **راه حل**: اضافه کردن خصوصیات مورد نیاز

### 2. Invalid URL Format
- **مشکل**: فرمت URL نادرست
- **راه حل**: استفاده از URL کامل با https://

### 3. Invalid Date Format
- **مشکل**: فرمت تاریخ نادرست
- **راه حل**: استفاده از ISO 8601 format

### 4. Missing Image Properties
- **مشکل**: خصوصیات تصویر ناقص
- **راه حل**: اضافه کردن width و height

## ✅ بهترین شیوه‌ها

### 1. استفاده از @id
\`\`\`json
{
  "@type": "Person",
  "@id": "https://example.com#person"
}
\`\`\`

### 2. ارتباط بین Schema ها
\`\`\`json
{
  "@type": "Article",
  "author": {
    "@id": "https://example.com#person"
  }
}
\`\`\`

### 3. تصاویر با کیفیت
- حداقل 1200x630 پیکسل
- فرمت JPG یا PNG
- نسبت 16:9 یا 4:3

### 4. URL های کامل
- همیشه از https:// استفاده کنید
- URL های نسبی استفاده نکنید

## 🔧 ابزارهای کمکی

### 1. Browser Console
\`\`\`javascript
// نمایش تمام Schema ها
const schemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  .map(script => JSON.parse(script.textContent));
console.log(schemas);
\`\`\`

### 2. Chrome Extension
- **Structured Data Testing Tool**
- **Schema.org Validator**

### 3. Online Validators
- https://validator.schema.org/
- https://search.google.com/test/rich-results
- https://www.bing.com/toolbox/markup-validator

## 📊 گزارش تست

### نمونه گزارش موفق:
\`\`\`
✅ Website Schema: Valid
✅ Person Schema: Valid  
✅ LocalBusiness Schema: Valid
⚠️ Article Schema: Missing image dimensions
❌ Review Schema: Missing required property 'reviewBody'
\`\`\`

### اقدامات بعدی:
1. رفع خطاهای حیاتی
2. بهبود هشدارها
3. تست مجدد
4. ثبت در Google Search Console

## 🎯 نکات مهم

1. **تست منظم**: هر تغییری را تست کنید
2. **محیط Production**: Schema ها را در سرور اصلی تست کنید
3. **Mobile-First**: تست روی موبایل را فراموش نکنید
4. **Performance**: Schema های سنگین از سرعت می‌کاهند

## 📞 پشتیبانی

در صورت مشکل:
1. مستندات Schema.org را مطالعه کنید
2. در Google Search Central جستجو کنید
3. از کامیونیتی توسعه‌دهندگان کمک بگیرید
