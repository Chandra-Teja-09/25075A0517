package com.example;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "AuthServlet", urlPatterns = {"/auth"})
public class AuthServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Get username and password from form
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Basic validation (non-empty)
        if (username != null && !username.trim().isEmpty() &&
            password != null && !password.trim().isEmpty()) {

            // Set username as request attribute for DashboardServlet
            request.setAttribute("username", username);

            // Forward to DashboardServlet
            request.getRequestDispatcher("/dashboard").forward(request, response);
        } else {
            // If validation fails, redirect back to index with error
            response.sendRedirect("index.html?error=1");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Redirect GET requests to index page
        response.sendRedirect("index.html");
    }
}
