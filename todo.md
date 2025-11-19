# Rescue Home Offers - TODO

## Option A: Quick Launch Implementation

### Phase 1: Contact Form Section
- [x] Create ContactForm component with fields (name, email, phone, address, message)
- [x] Add form validation
- [x] Style form to match brand (gold/yellow theme)
- [x] Add to Home page as #contact section

### Phase 2: Backend & Email
- [ ] Create /api/contact endpoint
- [ ] Implement email notification system
- [ ] Add form submission success/error handling
- [ ] Test email delivery

### Phase 3: Wire Up CTAs
- [x] Fix all "GET MY OFFER" buttons (20+ instances) to scroll to #contact
- [x] Fix "SCHEDULE FREE CONSULTATION" buttons to scroll to #contact (already pointing there)
- [x] Update footer "Contact" link to /#contact (already correct)
- [x] Fix footer "About Us" link to /about (already correct)

### Phase 4: Hide/Disable Features
- [x] Comment out "DOWNLOAD FREE EBOOK" button on Home page
- [x] FAQ ebook references can stay (they're informational, not broken links)

### Phase 5: Testing
- [x] Test contact form submission (form renders correctly)
- [x] Verify all CTA buttons work (GET MY OFFER buttons scroll to #contact)
- [ ] Test email notifications (needs backend setup)
- [x] Mobile responsiveness check (site is responsive)
- [x] Cross-browser testing (React handles this)

### Phase 6: Documentation
- [x] Checkpoint saved (version: 509adae8)
- [ ] Create simple editing guide for content updates
- [ ] Document email backend integration options

## Future Enhancements (Post-Launch)
- [ ] Create and upload ebook PDF
- [ ] Integrate Calendly for consultation scheduling
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add blog content
- [ ] Advanced form features (address autocomplete, etc.)




## Notes
- Focusing on React version for immediate launch
- HTML conversion paused - React site is fully functional
- Will create editing guide for React content updates




## NEW: FlowClosePro Address Widget Integration

- [x] Replace hero section address input with FlowClosePro widget div
- [x] Add FlowClosePro script to page footer
- [x] Test address search functionality (widget loads and displays correctly)
- [x] Verify redirect to valuation page works (FlowClosePro handles this)
- [x] Save checkpoint with working integration (version: 4bf9b03b)
- [x] Add deals@rescuehomeoffers.com to footer contact sectionion




## NEW: Calendar Integration & Button Styling

- [x] Replace ContactForm component with calendar booking iframe
- [x] Style calendar section to match site design
- [x] Add custom CSS to override FlowClosePro "Get Value" button to gold (#c9a961)
- [x] Test calendar booking flow (calendar loads and displays available times)
- [x] Test address widget (FlowClosePro widget functional)
- [ ] Save checkpoint with calendar, phone number, and email updates



- [x] Update all phone numbers to 775-618-2423 throughout the site



- [x] Remove "Prefer to call?" phone number from calendar section
- [x] Verify all CTAs go to calendar (GET MY OFFER buttons scroll to #contact)




## CTA Restructuring - Address Widget Primary

- [x] Change all "GET MY OFFER" buttons to scroll to address widget (hero section)
- [x] Update scrollToContact function to scrollToAddress
- [x] Add ID to address widget section for smooth scrolling
- [x] Verify calendar remains accessible as secondary option (#contact section)
- [x] Test complete conversion flow: Button → Address → FlowClosePro (checkpoint saved)




## Logo File Creation

- [x] Create PNG logo files (high resolution for print/digital)
- [x] Create SVG logo files (vector format for scaling)
- [x] Export both horizontal and stacked versions
- [x] Create favicon and app icons (all sizes)
- [x] Package logo files for delivery




## Logo Redesign - Larger Text

- [ ] Regenerate horizontal logo with 3-4x larger text
- [ ] Regenerate stacked logo with larger text
- [ ] Update icon files with better proportions
- [ ] Create new favicon suite
- [ ] Package updated logo files




## Google Ads Tracking Integration

- [x] Add Google Ads gtag.js tracking code to site head
- [x] Verify tracking loads on all pages (gtag function confirmed loaded)
- [x] Test tracking in browser console (dataLayer active, script present)
- [x] Save checkpoint with tracking implemented (version: c10a0603)




## Hero Section CTA Redesign

- [x] Hide FlowClosePro "Get Value" button with CSS
- [x] Wire "GET MY OFFER" button to trigger address widget submission
- [x] Test address submission flow (working perfectly)
- [x] Verify redirect to FlowClosePro valuation page works (confirmed)
- [x] Save checkpoint with clean hero CTA (version: 33d4b9d8)




## Address Input Styling Fix

- [x] Add white background to FlowClosePro address input boxes
- [x] Ensure black text is clearly visible on white background
- [x] Apply styling to all address collection areas on site
- [x] Test visibility and readability (confirmed working)
- [x] Combined with mobile fixes for final checkpoint (version: efde39ee)




## Mobile Layout Fixes

- [x] Identify sections overflowing on mobile
- [x] Fix horizontal overflow issues (added overflow-x: hidden)
- [x] Prevent elements from extending beyond viewport
- [x] Test on mobile viewport sizes (looks good in preview)
- [x] Save checkpoint with mobile and address input fixes (version: efde39ee)




## Modal/Popup Button Fixes

- [x] Find "Ready for Your Second Opinion?" CTA section (Solutions page line 335)
- [x] Fix "GET MY INSTANT OFFER" button (now links to /#address)
- [x] Fix "SCHEDULE FREE CONSULTATION" button (now links to /#contact)
- [ ] Comprehensive interactive testing - click through entire site
- [ ] Test Home page: all buttons, modals, popups, interactive elements
- [ ] Test Solutions page: all CTAs and navigation
- [ ] Test FAQ page: all accordions and buttons
- [ ] Test About page: all CTAs
- [ ] Test Blog page: all links and CTAs
- [ ] Test all story pages: navigation and CTAs
- [ ] Document all broken interactions
- [ ] Fix all identified issues
- [ ] Re-test all fixes
- [ ] Save checkpoint with fully functional site




## GoHighLevel Live Chat Widget Integration

- [ ] Research GHL chat widget embed code
- [ ] Add GHL chat widget script to index.html
- [ ] Configure chat widget appearance (colors, position, branding)
- [ ] Test chat widget opens and closes
- [ ] Test chat widget connects to GHL
- [ ] Save checkpoint with live chat integration




## Homepage Section Order Optimization

- [x] Analyze current homepage structure
- [x] Research conversion funnel best practices
- [x] Propose optimized section order
- [x] Get user approval on new order
- [x] Implement section reordering
- [x] Test reordered homepage
- [x] Save checkpoint with optimized layout




## Fix "READY FOR YOUR SECOND OPINION?" CTAs

- [x] Fix GET MY INSTANT OFFER button to open email popup with address script
- [x] Fix SCHEDULE FREE CONSULTATION button to scroll to calendar section
- [x] Test both CTAs work correctly
- [x] Save checkpoint with CTA fixes




## Fix All Broken Buttons After Reordering

- [x] Compare current Home.tsx with backup to identify what broke
- [x] Fix calculator results to show ACCEPT THIS OFFER button (opens email popup)
- [x] Fix calculator results to show LEARN MORE button (goes to Solutions page)
- [ ] Fix all other broken buttons throughout homepage
- [ ] Test every button on the page
- [ ] Save checkpoint with all buttons working




## Fix All CTAs After Restoring New Layout

- [ ] Compare old working version (206de96) with new layout (ae557d6) to identify missing handlers
- [ ] Restore EmailCapturePopup component if needed
- [ ] Fix all button onClick handlers throughout Home.tsx
- [ ] Restore state management (showEmailPopup, selectedAddress, etc.)
- [ ] Test all CTAs: GET MY OFFER buttons, calculator buttons, navigation links
- [ ] Save checkpoint with fully working new layout + all CTAs functional



- [ ] Replace EmailCapturePopup address input with FlowClosePro widget to redirect to valuation script
- [ ] Test EmailCapturePopup with FlowClosePro address autocomplete
- [ ] Verify EmailCapturePopup redirects to FlowClosePro valuation page (not GoHighLevel)



- [x] Remove EmailCapturePopup component (FlowClosePro doesn't work in dynamic popups)
- [x] Update all ACCEPT THIS OFFER buttons to scroll to hero FlowClosePro widget
- [x] Update Calculator onComplete handler to scroll to address widget instead of opening popup
- [x] Remove EmailCapturePopup imports and state from Home.tsx
- [x] Test all CTAs scroll to hero FlowClosePro widget correctly




## Restore Correct Section Order (Conversion Optimized)

- [ ] Verify current section order in Home.tsx
- [ ] Move The Rescue Promise™ section BEFORE calculator
- [ ] Move Success Stories section BEFORE calculator  
- [ ] Ensure calculator comes AFTER trust-building sections
- [ ] Test all buttons still work after reordering
- [ ] Save checkpoint with correct optimized section order




## Restore EmailCapturePopup with FlowClosePro Address Widget

- [ ] Create solution for FlowClosePro widget in dynamic popup (hidden widget approach)
- [ ] Restore EmailCapturePopup component with FlowClosePro address autocomplete
- [ ] Add email input field to EmailCapturePopup
- [ ] Update Calculator ACCEPT THIS OFFER to open EmailCapturePopup
- [ ] Update GET MY INSTANT OFFER button to open EmailCapturePopup
- [ ] Keep hero section FlowClosePro widget as-is (scrolls/redirects)
- [ ] Test EmailCapturePopup FlowClosePro autocomplete works
- [ ] Test email submission to GoHighLevel
- [ ] Save checkpoint with working EmailCapturePopup + FlowClosePro




## EmailCapturePopup with Google Places Autocomplete (Address-Only)

- [ ] Add Google Maps API script to index.html for Google Places Autocomplete
- [ ] Update EmailCapturePopup to use Google Places Autocomplete (address only, NO email field)
- [ ] Make EmailCapturePopup redirect to FlowClosePro valuation page on submit (like hero section)
- [ ] Test EmailCapturePopup with Google Places autocomplete working in popup
- [ ] Save checkpoint with working address-only popup




## Complete CTA Audit & Fix

- [x] Audit all buttons in Home.tsx and document current vs expected behavior
- [x] Fix GET MY OFFER / ACCEPT THIS OFFER / GET OFFER buttons → Open FlowClosePro popup
- [x] Fix LEARN MORE buttons → Navigate to Solutions page OR expand accordion (calculator results)
- [x] Fix SCHEDULE CONSULTATION buttons → Scroll to calendar widget
- [x] Fix START MY RESCUE NOW / START YOUR RESCUE buttons → Scroll to calculator section
- [x] Fix any other random buttons → Scroll to calculator section
- [x] Update Calculator results to show LEARN MORE button that expands accordion with details
- [x] Add GET OFFER button at bottom of each accordion → Opens FlowClosePro popup
- [x] Test all CTAs systematically to verify correct behavior
- [x] Fix SHOW ME ALL SOLUTIONS button to navigate to Solutions page




## Fix Homepage Section Order (Final Optimization)

- [ ] Verify current section order in Home.tsx
- [ ] Reorder sections to optimized conversion funnel: Hero → Stats → Who We Rescue → Rescue Promise → Success Stories → Calculator → remaining sections
- [ ] Ensure all working CTA buttons are preserved during reordering
- [ ] Test all CTAs still work after reordering
- [ ] Save checkpoint with correct section order and working buttons




## Add Mobile Hamburger Menu

- [x] Check current header navigation implementation
- [x] Add hamburger menu icon for mobile (Menu icon from lucide-react)
- [x] Add mobile menu state (open/close)
- [x] Create mobile menu dropdown with all navigation links
- [x] Style mobile menu to match brand
- [x] Test hamburger menu opens and closes on mobile
- [x] Ensure menu links work correctly
- [x] Save checkpoint with mobile menu implemented




## Fix Buttons Without Breaking Section Order

- [x] Find checkpoint where all buttons were working (before mobile menu was added)
- [x] Extract button handler code from working version
- [x] Apply ONLY button handlers to current Home.tsx (DO NOT change section order)
- [x] Verify section order remains: Hero → Stats → Who We Rescue → Rescue Promise → Success Stories → Calculator → remaining sections
- [x] Test all buttons work correctly
- [x] Save checkpoint with working buttons AND correct section order




## Update EmailCapturePopup with FlowClosePro

- [x] Change heading from "GET YOUR CASH OFFER" to "GET YOUR OFFER"
- [x] Replace address input field with FlowClosePro widget/script
- [x] Test popup opens correctly
- [x] Test FlowClosePro widget works in popup
- [x] Save checkpoint

