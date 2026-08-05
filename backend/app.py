import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for Next.js frontend running on localhost:3000 or production domains
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Sample Data Store (In-Memory for demonstration & easy extensibility)

SERVICES_DATA = {
    "professional": [
        {
            "id": "wordpress",
            "title": "WordPress Site Development",
            "tagline": "Fast, Responsive & High-Converting Websites",
            "price_starting": "₹3,999",
            "price_numeric": 3999,
            "badge": "Popular Choice",
            "features": [
                "Custom Theme Design & Responsive Layout",
                "SEO Friendly & Fast Loading Speed",
                "Contact Form & Social Media Integration",
                "Admin Panel & Content Management Training",
                "1 Month Free Support & Maintenance"
            ],
            "popular": True
        },
        {
            "id": "projects",
            "title": "Custom Web & Software Projects",
            "tagline": "Tailored Solutions Built with Modern Tech Stacks",
            "price_starting": "Starting @ ₹8,000",
            "price_numeric": 8000,
            "badge": "Scalable",
            "features": [
                "React / Next.js / Node / Python Flask",
                "Custom Database Architecture (SQL / MongoDB)",
                "RESTful APIs & Third-party Integrations",
                "High Performance & Secure Authentication",
                "Extra pricing according to project scope & complexity"
            ],
            "popular": False
        },
        {
            "id": "android_app",
            "title": "Android App Development",
            "tagline": "Native & Cross-Platform Mobile Applications",
            "price_starting": "Starting @ ₹15,000",
            "price_numeric": 15000,
            "badge": "High Demand",
            "features": [
                "Modern Flutter / React Native / Kotlin Architecture",
                "Sleek UI/UX Mobile Interface",
                "Push Notifications & Offline Support",
                "Backend API & Database Synchronization",
                "Google Play Store Deployment Support"
            ],
            "popular": False
        }
    ],
    "students": [
        {
            "id": "student_project",
            "title": "College Project & Documentation Report",
            "tagline": "Complete Academic Solution with Clean Code & Full Project Report",
            "price_starting": "₹3,000",
            "price_numeric": 3000,
            "badge": "Student Special",
            "features": [
                "Complete Executable Source Code",
                "Comprehensive Project Report (IEEE / University format)",
                "System Architecture & Flowchart Diagrams",
                "Step-by-Step Local Setup & Execution Guide",
                "Viva Guidance & Q&A Support"
            ],
            "popular": True
        },
        {
            "id": "urgent_addon",
            "title": "Urgent Express Delivery Add-on",
            "tagline": "Need your submission tomorrow? We've got you covered!",
            "price_starting": "+ ₹1,000 extra",
            "price_numeric": 1000,
            "badge": "Express 24h",
            "features": [
                "24 to 48 Hours Guaranteed Delivery",
                "Priority Developer Allocation",
                "Instant Download & Setup Assistance",
                "Late-night Support Call Available"
            ],
            "popular": False
        }
    ]
}

BLOGS_DATA = [
    {
        "id": "nextjs-flask-architecture",
        "title": "Why Next.js + Python Flask is the Ultimate Modern Tech Stack",
        "excerpt": "Discover how combining Next.js server rendering with Flask's lightweight backend APIs delivers lightning-fast fullstack web applications.",
        "category": "Architecture",
        "date": "Aug 01, 2026",
        "author": "Mr. Jatin Rajput",
        "readTime": "5 min read",
        "content": "Combining Next.js for client-side dynamism and Python Flask for high-performance microservices creates an unbeatable developer experience. Python brings rich AI, ML, and data processing ecosystems, while Next.js delivers world-class UI rendering..."
    },
    {
        "title": "5 Key Elements of a High-Converting WordPress Site",
        "id": "wordpress-conversion-tips",
        "excerpt": "How to structure your WordPress website to maximize leads, improve page speeds under 1 second, and boost Google search ranks.",
        "category": "Web Design",
        "date": "Jul 28, 2026",
        "author": "Ms. Bharti Singh",
        "readTime": "4 min read",
        "content": "A successful website isn't just about pretty colors. It requires strategic typography, clear call-to-actions, lightweight asset loading, and mobile-first responsive design..."
    },
    {
        "title": "How to Excel in College Final-Year Computer Science Projects",
        "id": "student-project-guide",
        "excerpt": "A step-by-step roadmap for engineering and IT students to pick, build, and present top-scoring final year projects.",
        "category": "Students Corner",
        "date": "Jul 20, 2026",
        "author": "Mr. Jatin Rajput",
        "readTime": "6 min read",
        "content": "Every year, thousands of students struggle with project reports and viva preparation. Focus on modular code design, clear entity-relationship diagrams, and well-documented API endpoints..."
    }
]

TESTIMONIALS_DATA = [
    {
        "id": 1,
        "name": "Rohan Sharma",
        "role": "Startup Founder",
        "type": "Client",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        "comment": "TriNetix transformed our online presence! The WordPress site they built for ₹3,999 was lightning fast, beautifully designed, and delivered in just 3 days.",
        "rating": 5
    },
    {
        "id": 2,
        "name": "Priya Verma",
        "role": "B.Tech Final Year Student",
        "type": "Student",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        "comment": "I needed an urgent college project with a full report in under 48 hours. Mr. Jatin and Ms. Bharti delivered flawless code and documentation. Scored an A+ grade!",
        "rating": 5
    },
    {
        "id": 3,
        "name": "Vikramaditya Singh",
        "role": "E-Commerce Business Owner",
        "type": "Client",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        "comment": "The Android app designed by TriNetix is seamless. Exceptional UI/UX, vibrant purple dark theme, and great support throughout.",
        "rating": 5
    }
]

CONTACT_MESSAGES = []

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "TriNetix Flask API", "version": "1.0.0"})

@app.route('/api/services', methods=['GET'])
def get_services():
    return jsonify({"success": True, "data": SERVICES_DATA})

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    return jsonify({"success": True, "data": BLOGS_DATA})

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    return jsonify({"success": True, "data": TESTIMONIALS_DATA})

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json() or {}
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()
    service_type = data.get('serviceType', 'General Inquiry')

    if not name or not email or not message:
        return jsonify({"success": False, "error": "Please provide your Name, Email, and Message."}), 400

    msg_obj = {
        "id": len(CONTACT_MESSAGES) + 1,
        "name": name,
        "email": email,
        "phone": data.get('phone', ''),
        "serviceType": service_type,
        "message": message,
        "isStudent": data.get('isStudent', False)
    }
    CONTACT_MESSAGES.append(msg_obj)

    return jsonify({
        "success": True, 
        "message": f"Thank you {name}! Your message has been sent successfully to TriNetix team. We will contact you shortly."
    })

@app.route('/api/student-inquiry', methods=['POST'])
def handle_student_inquiry():
    data = request.get_json() or {}
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    college = data.get('college', '').strip()
    project_topic = data.get('projectTopic', '').strip()
    urgent = data.get('isUrgent', False)

    if not name or not email or not project_topic:
        return jsonify({"success": False, "error": "Name, Email, and Project Topic are required."}), 400

    total_price = 3000 + (1000 if urgent else 0)

    return jsonify({
        "success": True,
        "estimatedPrice": f"₹{total_price:,}",
        "message": f"Hello {name}! Your student inquiry for '{project_topic}' has been logged. Total estimated package: ₹{total_price} ({'Urgent 24-48h Delivery' if urgent else 'Standard Academic Delivery'}). Our leads Mr. Jatin Rajput and Ms. Bharti Singh will contact you right away."
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting TriNetix Backend Flask Server on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=True)
