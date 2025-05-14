import { Store, Shield, Building2, ShoppingCart, Terminal, CreditCard, Phone, Hotel, UserCheck, MessageSquare } from 'lucide-react';

export const projects = [
  {
    title: "E-commerce Testing Suite",
    description: "Developed comprehensive testing framework for a large-scale e-commerce platform handling 100K+ daily transactions. Implemented automated tests for payment processing, inventory management, and user journey flows.",
    tags: ["Selenium", "Python", "API Testing", "Performance Testing", "Security"],
    icon: <Store className="w-6 h-6" />,
    highlights: [
      "Reduced test execution time by 70%",
      "Automated 200+ test cases",
      "Improved payment gateway reliability"
    ],
    fullDescription: `A comprehensive testing framework designed for a high-traffic e-commerce platform processing over 100,000 daily transactions. The project focused on ensuring seamless user experiences and robust system performance.

Key Achievements:
• Implemented end-to-end automated testing covering critical user journeys
• Developed performance testing scripts to handle peak load scenarios
• Created security testing protocols for payment processing
• Integrated continuous testing pipeline with CI/CD workflow

Technical Implementation:
• Selenium WebDriver for UI automation
• Python scripts for API testing
• JMeter for performance testing
• Custom reporting dashboard for real-time monitoring`,
    challenges: [
      "Handling complex payment gateway integrations",
      "Managing test data across multiple environments",
      "Optimizing test execution for large test suites",
      "Implementing parallel test execution"
    ],
    results: [
      "70% reduction in test execution time",
      "99.9% payment processing reliability",
      "50% reduction in production bugs",
      "Improved developer productivity"
    ]
  },
  {
    title: "POS System Testing",
    description: "Led end-to-end testing of a modern Point of Sale system used by 500+ retail locations. Implemented automated testing for payment processing, inventory sync, and offline functionality.",
    tags: ["Cypress", "API Testing", "Performance", "Offline Mode", "Payment Integration"],
    icon: <CreditCard className="w-6 h-6" />,
    highlights: [
      "99.9% system uptime achieved",
      "Reduced critical bugs by 85%",
      "Automated offline mode testing"
    ],
    fullDescription: `Comprehensive testing solution for a modern Point of Sale system deployed across 500+ retail locations, handling complex scenarios including offline operations and real-time inventory management.

Key Achievements:
• Developed automated test suite for critical POS functions
• Implemented robust offline mode testing strategy
• Created performance benchmarks for transaction processing
• Established monitoring for system reliability

Technical Implementation:
• Cypress for frontend testing
• Custom API testing framework
• Mock service worker for offline testing
• Real-time monitoring dashboard`,
    challenges: [
      "Testing offline functionality",
      "Simulating high-volume transactions",
      "Cross-device compatibility",
      "Real-time inventory sync testing"
    ],
    results: [
      "85% reduction in critical bugs",
      "99.9% system reliability",
      "40% faster transaction processing",
      "Successful deployment to 500+ locations"
    ]
  },
  {
    title: "eCommerce Mobile App Testing",
    description: "Spearheaded testing for a cross-platform mobile shopping app with 1M+ downloads. Implemented automated testing for user journeys, payment processing, and push notifications.",
    tags: ["Appium", "Mobile Testing", "Cross-platform", "Performance"],
    icon: <Phone className="w-6 h-6" />,
    highlights: [
      "Achieved 4.8/5 app store rating",
      "Reduced crash rate by 95%",
      "Automated cross-platform testing"
    ],
    fullDescription: `End-to-end testing solution for a high-traffic mobile shopping application available on iOS and Android, focusing on user experience and app stability.

Key Achievements:
• Implemented cross-platform automated testing
• Developed performance testing framework
• Created automated push notification testing
• Established CI/CD pipeline for mobile testing

Technical Implementation:
• Appium for mobile automation
• Custom framework for push notification testing
• Performance monitoring tools
• Cross-platform compatibility testing`,
    challenges: [
      "Cross-platform compatibility",
      "Push notification testing",
      "Network condition simulation",
      "Device fragmentation"
    ],
    results: [
      "95% reduction in crash rate",
      "4.8/5 average app store rating",
      "60% faster test execution",
      "Successful launch in 10 countries"
    ]
  },
  {
    title: "Hotel Booking Services",
    description: "Developed testing framework for a hotel booking platform processing 50K+ bookings daily. Implemented automated testing for reservation system, payment processing, and booking management.",
    tags: ["Selenium", "API Testing", "Load Testing", "Booking Engine"],
    icon: <Hotel className="w-6 h-6" />,
    highlights: [
      "Zero booking conflicts achieved",
      "Improved system reliability by 90%",
      "Automated booking engine testing"
    ],
    fullDescription: `Comprehensive testing solution for a high-volume hotel booking platform, ensuring reliable reservations and payment processing across multiple hotel chains.

Key Achievements:
• Automated end-to-end booking flow testing
• Implemented concurrent booking testing
• Developed payment gateway integration tests
• Created availability calendar testing suite

Technical Implementation:
• Selenium for UI automation
• Custom API testing framework
• Load testing with JMeter
• Real-time availability testing`,
    challenges: [
      "Complex booking logic testing",
      "Multiple payment gateway integration",
      "Real-time availability updates",
      "Concurrent booking handling"
    ],
    results: [
      "Zero booking conflicts",
      "90% improvement in system reliability",
      "75% reduction in payment failures",
      "Successful integration with 100+ hotels"
    ]
  },
  {
    title: "KYC/ReKYC System",
    description: "Led testing for a digital KYC verification system processing 10K+ verifications daily. Implemented automated testing for document verification, face recognition, and compliance checks.",
    tags: ["Python", "Security Testing", "Compliance", "OCR Testing"],
    icon: <UserCheck className="w-6 h-6" />,
    highlights: [
      "99.9% verification accuracy",
      "Reduced processing time by 80%",
      "Automated compliance testing"
    ],
    fullDescription: `End-to-end testing solution for a digital KYC verification system, ensuring accurate document verification and regulatory compliance.

Key Achievements:
• Automated document verification testing
• Implemented face recognition testing
• Developed compliance check automation
• Created security testing framework

Technical Implementation:
• Python for automation
• OCR testing framework
• Face recognition testing tools
• Compliance verification suite`,
    challenges: [
      "Complex document verification",
      "Biometric data testing",
      "Regulatory compliance testing",
      "Security protocol verification"
    ],
    results: [
      "99.9% verification accuracy",
      "80% reduction in processing time",
      "Zero compliance violations",
      "Successful deployment in 5 countries"
    ]
  },
  {
    title: "Chatbot Application",
    description: "Developed testing framework for an AI-powered customer service chatbot handling 100K+ conversations daily. Implemented automated testing for conversation flows, intent recognition, and integration testing.",
    tags: ["API Testing", "NLP Testing", "Performance", "Integration"],
    icon: <MessageSquare className="w-6 h-6" />,
    highlights: [
      "95% intent recognition accuracy",
      "Reduced response time by 60%",
      "Automated conversation testing"
    ],
    fullDescription: `Comprehensive testing solution for an AI-powered chatbot system, ensuring accurate intent recognition and natural conversation flows.

Key Achievements:
• Automated conversation flow testing
• Implemented NLP accuracy testing
• Developed performance benchmarking
• Created integration testing suite

Technical Implementation:
• Custom API testing framework
• NLP testing tools
• Performance monitoring
• Integration testing automation`,
    challenges: [
      "Complex conversation flows",
      "Natural language processing",
      "Multi-language support",
      "Integration with multiple platforms"
    ],
    results: [
      "95% intent recognition accuracy",
      "60% faster response time",
      "Support for 10+ languages",
      "Successful handling of 100K+ daily conversations"
    ]
  }
];