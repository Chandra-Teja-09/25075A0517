# User Auth App - Java Servlet Web Application

A simple web application built with Java Servlets that accepts a username and password, then displays a welcome message with the current date and time on a dashboard.

## Project Structure

```
exercise-2/servlets-program/
+-- pom.xml                                    # Maven configuration
+-- src/main/java/com/example/
¦   +-- AuthServlet.java                       # Handles login form submission
¦   +-- DashboardServlet.java                  # Displays welcome message with datetime
+-- src/main/webapp/
¦   +-- index.html                            # Login form page (default)
¦   +-- WEB-INF/
¦       +-- web.xml                           # Deployment descriptor
+-- src/main/resources/                        # Resources directory
```

## Features

- Simple sign-in form with username and password fields
- Basic form validation (non-empty fields)
- Dashboard displays personalized greeting with user'\''s name
- Shows current date and time
- Clean, responsive UI with gradient styling
- Clean MVC architecture (Servlet-based)

## Technology Stack

- **Java 11+**
- **Java EE Servlet API 4.0.1** (`javax.servlet.*`)
- **Maven** for build and dependency management
- **HTML5/CSS3** for frontend
- **Apache Tomcat 9** compatible

## Prerequisites

- **Java JDK 11 or higher** installed
- **Maven 3.6+** installed (optional - WAR can be built manually)
- **Apache Tomcat 9** installed and running

## Setup and Deployment

### Quick Deploy

```bash
cd exercise-2/servlets-program
mvn clean package
```

Copy `target/servlets-program.war` to Tomcat'\''s `webapps/` folder.

### Manual Build (no Maven)

1. Compile:
```bash
cd exercise-2/servlets-program
javac -d target/classes -cp "path/to/javax.servlet-api-4.0.1.jar" src/main/java/com/example/*.java
```

2. Copy web resources:
```bash
xcopy src/main/webapp target/servlets-program /E /I /Y
```

3. Create WAR:
```bash
jar -cf target/servlets-program.war -C target servlets-program
```

4. Deploy `target/servlets-program.war` to Tomcat `webapps/`

### Start Tomcat

```bash
# Windows
tomcat9\bin\startup.bat

# Linux/Mac
tomcat9/bin/startup.sh
```

## Access the Application

- Main URL: `http://localhost:8080/servlets-program/`
- Login page: `http://localhost:8080/servlets-program/index.html`
- Dashboard: `http://localhost:8080/servlets-program/dashboard`

## Application Flow

1. User accesses `index.html` (landing page)
2. Enters any username and password
3. Form POSTs to `/auth` (AuthServlet)
4. AuthServlet validates input and forwards to `/dashboard`
5. DashboardServlet displays: "Hello, [username]!" + current datetime
6. User clicks "Back to Sign In" to return

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/index.html` | Login form page |
| GET    | `/` | Redirects to index.html |
| POST   | `/auth` | Process login credentials |
| GET    | `/dashboard` | Display welcome message with datetime |

## Sample Usage

1. Open `http://localhost:8080/servlets-program/`
2. Enter any username (e.g., `alice`)
3. Enter any password
4. Click "Sign In"
5. See: "Hello, alice! Current Date & Time: 27-04-2026 11:55:00"

## Tomcat Manager Access

If you need to access Tomcat'\''s Manager GUI:
- URL: `http://localhost:8080/manager/html`
- Username: `root`
- Password: `root`
- Configured in: `tomcat/conf/tomcat-users.xml`

## Notes

- No real authentication - accepts any non-empty username/password
- Servlet API 4.0 (Tomcat 9) - uses `javax.servlet.*` package
- No database - simple demo showing servlet forwarding
- Back button on dashboard returns to sign-in page
