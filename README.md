# OPSCORE - Operations Dashboard

OPSCORE is a production-ready internal operations dashboard designed to give fast-growing companies real-time visibility into performance, tasks, and system health — all in one place.


GO Live Preview : https://eslamarafa-dev.github.io/opscore-operations-dashboard/


<img width="1920" height="877" alt="1" src="https://github.com/user-attachments/assets/cb4f14dc-6721-4a7b-b9ce-37c4db31ce29" />


<img width="1920" height="877" alt="2" src="https://github.com/user-attachments/assets/7acc0716-1e03-45f8-a0c6-bad4b4216b2c" />


<img width="1920" height="876" alt="3" src="https://github.com/user-attachments/assets/868467da-ec3b-4f77-8148-59fbdcbc4c2a" />


<img width="1920" height="875" alt="4" src="https://github.com/user-attachments/assets/ca5cee37-8221-40ce-8a6e-cf7317bf124e" />


<img width="1918" height="877" alt="5" src="https://github.com/user-attachments/assets/867e4e97-3d96-4bea-80bd-e35f5522d6ab" />



---

## Business Context

OPSCORE was born from a clear business need: A mid-sized SaaS company experiencing rapid growth found their operations data fragmented across multiple spreadsheets, project management tools, and communication platforms. Leadership had no centralized view of daily performance metrics, team velocity, or system health.

The operations team spent hours each week manually compiling reports from different sources. Decision-making was slow because data wasn't real-time. The company needed a single source of truth.

**OPSCORE** (Operations Scoreboard) was developed as the company's internal operations panel. It provides leadership with instant visibility into critical metrics: client growth, task completion rates, system alerts, and operational risks. Today, it's used daily by operations teams, support agents, and managers to track performance and ensure smooth business continuity.

---


## Problem → Solution Mapping

| Business Problem | OPSCORE Solution |
|-----------------|------------------|
| Fragmented data across tools | Centralized operations dashboard |
| Manual weekly reports | Real-time KPI tracking |
| Slow decision-making | Instant visibility into metrics |
| No system health overview | Live system alerts panel |

---



## Target Users

- Operations Managers
- SaaS Founders
- Support Team Leads
- Internal Operations Teams



## Features

### Dashboard Overview
- Real-time KPI cards displaying key metrics
- Visual indicators for status and trends
- Animated entrance effects on page load
- Responsive grid layout for all screen sizes

### Client Management
- Fetch and display client data from external API (JSONPlaceholder)
- Search functionality across client names, emails, and companies
- Add new clients with form validation
- Edit existing client information
- Delete clients with confirmation dialog
- Status badges (Active, Pending, Blocked)
- Empty, loading, and error states

### Task Management
- Visual task cards with priority and status indicators
- Add new tasks with assignee information
- Edit task details and status
- Delete tasks when completed
- Real-time status updates
- Assignee avatars and names

### System Alerts
- Critical and informational alert types
- Acknowledge alerts functionality
- Simulate new alerts for testing purposes
- Real-time badge counter in sidebar
- Timestamped alert history

### Settings
- Profile information management
- Profile avatar upload with image preview
- System preference toggles (Real-time Analytics, Weekly Reports)

### User Experience
- Smooth scroll navigation with active section highlighting
- Toast notifications for user feedback
- Modal-based forms for data entry
- Responsive design for mobile, tablet, and desktop
- Keyboard accessibility (Escape to close modals)
- Interactive hover states and animations

---

## Design System

### Typography
- Font: Inter (via Google Fonts)
- Base font-size: 16px
- Line-height: 1.5
- Headings:
  - H1: 28px / 600 weight
  - H2: 20px / 600 weight
  - H3: 16px / 600 weight
- Letter-spacing: -0.025em for headings

### Colors
- Primary: #2563EB (Blue)
- Primary Hover: #1D4ED8 (Darker Blue)
- Background: #F9FAFB (Light Gray)
- Surface: #FFFFFF (White)
- Sidebar: #111827 (Dark Gray)
- Border: #E5E7EB
- Text Primary: #111827
- Text Secondary: #6B7280
- Text Muted: #9CA3AF
- Success: #16A34A
- Success Light: #DCFCE7
- Warning: #F59E0B
- Warning Light: #FEF3C7
- Error: #DC2626
- Error Light: #FEE2E2

### Spacing
- Baseline grid: 8px
- Consistent padding and margins
- Comfortable whitespace for readability
- Border radius: 8px (small), 12px (medium), 16px (large)

### Shadows
- Shadow Small: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Shadow Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- Shadow Large: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- Shadow XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

### Transitions
- Fast: 150ms ease
- Normal: 250ms ease
- Slow: 350ms ease

---

## Tech Stack

- **HTML5**: Semantic markup with ARIA labels for accessibility
- **CSS3**: Custom properties, Flexbox, Grid, CSS Variables
- **JavaScript (ES6+)**: Vanilla JavaScript, no frameworks
- **External API**: JSONPlaceholder for client data
- **No Build Tools Required**: Works directly in browser
- **Fonts**: Inter (Google Fonts)

---

## Project Structure

```
opscore-dashboard/
├── index.html          # Main HTML structure with semantic markup
├── css/
│   └── style.css       # Complete design system with CSS variables
├── js/
│   └── app.js          # Application logic and state management
├── assets/
│   └── images/         # Future image assets (logos, backgrounds)
└── README.md           # Project documentation
```

### Why This Structure?

**Separation of Concerns**: Keeping HTML, CSS, and JavaScript in separate files makes the codebase easier to maintain, debug, and scale. Developers can work on different parts simultaneously without merge conflicts.

**Scalability**: The `assets/` folder is prepared for future expansion. As the project grows, you can add company logos, background images, icon sets, and other static resources without reorganizing the entire structure.

**Team Collaboration**: Different team members can work on different files. A CSS specialist can focus on `style.css` while a JavaScript developer works on `app.js`, and a designer updates `index.html` structure.

**Production Standards**: This structure follows conventions used in enterprise applications and large-scale web projects. It makes onboarding new team members easier and aligns with industry best practices.

**Testing and Deployment**: Having separate files makes it easier to write unit tests, lint code, and deploy changes incrementally.

---

## How to Run Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Internet connection (for Google Fonts and API calls)

### Steps

1. **Clone or download the project** to your local machine:
   ```bash
   git clone <repository-url>
   cd opscore-dashboard
   ```

2. **Project files are already in place**:
   - `index.html` - Main application file
   - `css/style.css` - Stylesheet
   - `js/app.js` - JavaScript application

3. **Open the application**:
   - **Option 1 - Direct Open**: Simply double-click `index.html` to open it in your default web browser
   - **Option 2 - Local Server** (recommended for best experience):
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx serve .
     
     # Using PHP (if installed)
     php -S localhost:8000
     ```

4. **View in browser**:
   - Open http://localhost:8000 (or the port shown in your terminal)
   - The dashboard will load with sample data

### Expected Behavior

- KPI cards will display with animation
- Client data will load from JSONPlaceholder API
- Search functionality will filter clients in real-time
- Task cards will show operational tasks
- Alerts section will show system notifications

---

## API Integration

The dashboard fetches client data from:

**Endpoint**: https://jsonplaceholder.typicode.com/users
**Method**: GET
**Response Format**: JSON

**Sample Response**:
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "company": {
      "name": "Romaguera-Crona"
    }
  }
]
```

**Client Status Assignment**: 
Client status is randomly assigned from: Active, Pending, Blocked

**Error Handling**:
- Network failures display an error state with retry button
- Empty results show a friendly empty state message
- Loading state displays during data fetching

---

## Browser Support

- **Chrome**: Latest version (recommended)
- **Firefox**: Latest version
- **Safari**: Latest version (macOS and iOS)
- **Edge**: Latest version

**Minimum Requirements**:
- Modern browser with ES6+ support
- JavaScript enabled
- Stable internet connection (for API calls and fonts)

---

## Future Improvements

### Short-term Improvements
- [ ] Implement actual backend API integration
- [ ] Add user authentication and authorization
- [ ] Implement data persistence with localStorage or database
- [ ] Add more detailed analytics and charts (line charts, bar charts)
- [ ] Implement email notifications for critical alerts

### Medium-term Improvements
- [ ] Export functionality (CSV, PDF reports)
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Advanced filtering and sorting options
- [ ] Bulk actions for client management

### Long-term Improvements
- [ ] Unit tests and integration tests
- [ ] Progressive Web App (PWA) features
- [ ] Offline mode with service workers
- [ ] Real-time WebSocket updates
- [ ] Mobile application (React Native or Flutter)
- [ ] Advanced role-based access control
- [ ] Integration with third-party tools (Slack, Jira, etc.)

---

## Performance Considerations

- **Lazy Loading**: Components load on demand
- **Minimal Dependencies**: No heavy frameworks
- **Optimized CSS**: Uses CSS Grid and Flexbox for efficient layout
- **Efficient DOM Manipulation**: Batched updates and efficient selectors
- **No External Images**: Icons are SVG inline for faster loading

---

## Contributing

This project is proprietary software intended for internal business use.

For external contributions or questions:
1. Review the project structure
2. Follow the coding standards in existing files
3. Test changes in multiple browsers
4. Ensure no breaking changes to existing functionality

---

## License

This project is proprietary software intended for internal business use. All rights reserved.

---

## Version

- **Version**: 1.0.0
- **Last Updated**: 2024
- **Status**: Production Ready
- **Maintainer**: Operations Engineering Team

---

## Support

For questions, issues, or feature requests:

1. **Check the documentation** in this README
2. **Review the code** in `js/app.js` for implementation details
3. **Contact the development team** for technical support

---

## Acknowledgments

- **JSONPlaceholder**: For providing the mock API
- **Google Fonts**: For the Inter typeface
- **Operations Team**: For defining the requirements

---

*OPSCORE - Operations Scoreboard*

*Empowering operations teams with real-time visibility*

