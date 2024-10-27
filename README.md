```
project-root/
├── src/
│   ├── core/
│   │   ├── services/
│   │   │   └── bookService.js
│   ├── adapters/
│   │   ├── controllers/
│   │   │   └── bookController.js
│   │   ├── repositories/
│   │   │   └── bookRepository.js
│   │   ├── routes/
│   │   │   └── bookRoutes.js
│   │   ├── notifications/
│   │   │   └── notificationService.js
│   ├── application/
│   │   ├── config/
│   │   │   └── database.js
│   │   │   └── tableSetup.js
│   │   └── index.js
├── package.json
└── .env
```

Hexagonal Architecture (Ports and Adapters)
Structure:

Core: Contains the business logic and domain models.
Domain: Business entities and rules.
Services: Business logic and use cases.
Adapters: Interfaces for interacting with the core.
Controllers: Handle user input.
Repositories: Data access logic.
Routes: Define API endpoints.
Views: UI components.
Application: Configuration and application setup.
Flow:

User interacts with Adapters (e.g., controllers, views).
Adapters communicate with the Core through defined interfaces (ports).
Core processes the business logic and returns results to Adapters.
Coupling:

Loose coupling between components.
Core business logic is independent of external systems.
Use Case:

Suitable for complex applications with multiple external systems and interactions.

Hexagonal Architecture (Ports and Adapters)
โครงสร้าง:

Core: ประกอบด้วยตรรกะทางธุรกิจและโมเดลโดเมน
Domain: เอนทิตีทางธุรกิจและกฎเกณฑ์
Services: ตรรกะทางธุรกิจและกรณีการใช้งาน
Adapters: อินเตอร์เฟซสำหรับการโต้ตอบกับ Core
Controllers: จัดการการป้อนข้อมูลของผู้ใช้
Repositories: ตรรกะการเข้าถึงข้อมูล
Routes: กำหนด API endpoints
Views: ส่วนประกอบ UI
Application: การตั้งค่าและการกำหนดค่าแอปพลิเคชัน
การไหลของข้อมูล:

ผู้ใช้โต้ตอบกับ Adapters (เช่น controllers, views)
Adapters สื่อสารกับ Core ผ่านอินเตอร์เฟซที่กำหนดไว้ (ports)
Core ประมวลผลตรรกะทางธุรกิจและส่งผลลัพธ์กลับไปยัง Adapters
การเชื่อมโยง:

การเชื่อมโยงที่หลวมระหว่างส่วนประกอบ
ตรรกะทางธุรกิจหลักเป็นอิสระจากระบบภายนอก
กรณีการใช้งาน:

เหมาะสำหรับแอปพลิเคชันที่ซับซ้อนที่มีระบบภายนอกหลายระบบและการโต้ตอบที่หลากหลาย
