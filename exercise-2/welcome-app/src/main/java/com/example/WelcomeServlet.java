package com.example;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "WelcomeServlet", urlPatterns = {"/welcome"})
public class WelcomeServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");

        // Get username from request attribute
        String username = (String) request.getAttribute("username");

        // Get current date and time
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String currentDateTime = now.format(formatter);

        // Generate HTML response
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html lang=\"en\">");
            out.println("<head>");
            out.println("    <meta charset=\"UTF-8\">");
            out.println("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
            out.println("    <title>Welcome</title>");
            out.println("    <style>");
            out.println("        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }");
            out.println("        .container { background: white; padding: 40px; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); text-align: center; }");
            out.println("        h1 { color: #333; margin-bottom: 20px; }");
            out.println("        .username { color: #667eea; font-size: 1.5em; font-weight: bold; }");
            out.println("        .datetime { color: #666; margin-top: 20px; font-size: 0.9em; }");
            out.println("        .back-btn { display: inline-block; margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; }");
            out.println("        .back-btn:hover { background: #764ba2; }");
            out.println("    </style>");
            out.println("</head>");
            out.println("<body>");
            out.println("    <div class=\"container\">");
            out.println("        <h1>Welcome!</h1>");
            if (username != null && !username.trim().isEmpty()) {
                out.println("        <p>Hello, <span class=\"username\">" + username + "</span>!</p>");
            } else {
                out.println("        <p>Hello, Guest!</p>");
            }
            out.println("        <p class=\"datetime\">Current Date & Time: <strong>" + currentDateTime + "</strong></p>");
            out.println("        <a href=\"login.html\" class=\"back-btn\">Back to Login</a>");
            out.println("    </div>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}
