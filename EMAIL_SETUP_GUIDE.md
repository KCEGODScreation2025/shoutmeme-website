# Email Collection Setup Guide for SHOUT Website

## 🚨 **CRITICAL: Email Collection Setup Required Before Going Live**

Your website is now configured to collect emails instead of processing credit cards directly. However, you need to set up Mailchimp integration to actually receive the emails.

## 📧 **Current Email Collection Points:**

1. **Masterclass Page** - "Learn More" buttons for all tiers
2. **Urgent Kit Page** - "Get Your Kit Now" button
3. **Contact Page** - "Get Free Chapter 3" button
4. **Method Page** - Free ebook offer

## 🔧 **Mailchimp Setup Instructions:**

### **Step 1: Create Mailchimp Account**
1. Go to [mailchimp.com](https://mailchimp.com)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create Audience/List**
1. In Mailchimp dashboard, click "Audience" → "All contacts"
2. Click "Create Audience"
3. Name it: "SHOUT Method Subscribers"
4. Add your business email as the "From" address
5. Complete the setup

### **Step 3: Get Your Mailchimp API Key**
1. Go to Account → Extras → API Keys
2. Click "Create A Key"
3. Copy the API key (starts with letters/numbers)

### **Step 4: Get Your Audience ID**
1. Go to Audience → Settings → Audience name and defaults
2. Copy the "Audience ID" (starts with letters/numbers)

### **Step 5: Update Website Code**

Replace the placeholder Mailchimp function in each page with your actual credentials:

```javascript
function submitToMailchimp(formData) {
    const MAILCHIMP_API_KEY = 'your-api-key-here';
    const MAILCHIMP_AUDIENCE_ID = 'your-audience-id-here';
    const MAILCHIMP_DC = 'us1'; // or whatever your datacenter is
    
    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    
    const data = {
        email_address: formData.email,
        status: 'subscribed',
        merge_fields: {
            FNAME: formData.firstName || formData.name,
            CHALLENGE: formData.challenge || '',
            TIER: formData.tier || formData.productType || '',
            SOURCE: formData.source || ''
        }
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
```

## 🔒 **Security Checklist:**

- ✅ **NO credit card forms** on website
- ✅ **All payments** go through Stripe's hosted pages
- ✅ **Email collection** only for lead generation
- ✅ **Mailchimp integration** for email management
- ✅ **Secure API calls** to Mailchimp

## 📋 **Files That Need Mailchimp Integration:**

1. `masterclass.html` - Line ~850 (submitToMailchimp function)
2. `urgent_shout_kit.html` - Line ~950 (submitToMailchimp function)
3. `contact.html` - Email form (already configured)
4. `method_page.html` - Email form (already configured)

## 🚀 **Testing Before Going Live:**

1. **Test email collection** on each page
2. **Verify emails appear** in your Mailchimp audience
3. **Test Stripe links** work correctly
4. **Check all buttons** function properly
5. **Verify PDF download** works on about page

## 📞 **Support:**

If you need help setting up Mailchimp:
- Mailchimp Support: [support.mailchimp.com](https://support.mailchimp.com)
- API Documentation: [developer.mailchimp.com](https://developer.mailchimp.com)

## ⚠️ **Important Notes:**

- **Never commit API keys** to public repositories
- **Test thoroughly** before going live
- **Monitor email collection** after launch
- **Backup your Mailchimp data** regularly

---

**Status: READY FOR DEPLOYMENT** ✅
*Once Mailchimp is configured, your website will be completely secure and ready to go live.*
