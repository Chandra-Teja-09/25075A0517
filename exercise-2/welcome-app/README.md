# Welcome App - Java Servlet Web Application

A simple web application built with Java Servlets that accepts a username and password, then displays a welcome message with the current date and time.

## Project Structure

```
exercise-2/welcome-app/
├── pom.xml                                    # Maven configuration
├── src/main/java/com/example/
│   ├── LoginServlet.java                      # Handles login form submission
│   └── WelcomeServlet.java                    # Displays welcome message with datetime
├── src/main/webapp/
│   ├── login.html                            # Login form page
│   └── WEB-INF/
│       └── web.xml                           # Deployment descriptor
└── src/main/resources/                        # Resources directory
```

## Features

- Simple login form with username and password fields
- Basic form validation (non-empty fields)
- Welcome page displays personalized greeting
- Shows current date and time
- Clean, responsive UI with gradient styling
- Architecture: Model-View-Controller (MVC) pattern

## Technology Stack

- **Java 11+**
- **Jakarta Servlet API 5.0.0** (Java EE)
- **Maven** for build and dependency management
- **JSP/JSTL** support (optional)
- **HTML5/CSS3** for frontend

## Prerequisites

- **Java JDK 11 or higher** installed
- **Maven 3.6+** installed
- **Servlet container** (Apache Tomcat 10+ recommended)

## Setup and Deployment

### Option 1: Deploy to Apache Tomcat

1. **Build the WAR file:**
   ```bash
   cd exercise-2/welcome-app
   mvn clean package
   ```

2. **Deploy to Tomcat:**
   - Copy `target/welcome-app.war` to Tomcat's `webapps/` directory
   - Start Tomcat: `tomcat/bin/startup.bat` (Windows) or `tomcat/bin/startup.sh` (Linux/Mac)

3. **Access the application:**
   - URL: `http://localhost:8080/welcome-app/`
   - Or directly: `http://localhost:8080/welcome-app/login.html`

### Option 2: Run with Embedded Server (Jetty/Tomcat plugin)

Add an embedded server plugin to `pom.xml` if you want to run directly:
```bash
mvn jetty:run
```

### Option 3: IDE Deployment (IntelliJ/Eclipse/NetBeans)

- Import as Maven project
- Run on server (Tomcat) directly from IDE

## Application Flow

1. User accesses `login.html` (default welcome page)
2. Enters username and password
3. Form submits to `/login` (LoginServlet)
4. LoginServlet validates input and forwards to `/welcome`
5. WelcomeServlet displays personalized message with current datetime
6. User can click "Back to Login" to return

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/login.html` | Login form page |
| POST   | `/login` | Process login credentials |
| GET    | `/welcome` | Display welcome message with datetime |

## Sample Usage

1. Open `http://localhost:8080/welcome-app/login.html`
2. Enter any username (e.g., `john`)
3. Enter any password
4. Click "Login"
5. See: "Welcome, john! Current Date & Time: [current datetime]"

## Configuration

- **Java version:** Update in `pom.xml` properties
- **Servlet mapping:** Configure in `web.xml` or via `@WebServlet` annotations
- **Datetime format:** Change in `WelcomeServlet.java` (line 27)

## Build Output

- WAR file: `target/welcome-app.war`
- Compiled classes: `target/classes/`
- Web resources: `target/welcome-app/`

## Notes

- No database or authentication backend (simple demo)
- All passwords accepted (for demonstration purposes)
- Uses Jakarta Servlet namespace (jakarta.*)
- Compatible with Servlet 5.0 (Tomcat 10+)
