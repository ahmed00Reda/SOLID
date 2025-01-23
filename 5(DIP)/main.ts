// Define an interface for the dependency
interface ILogger {
    log(message: string): void;
}

// Implement the interface in a concrete class
class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

// High-level module depends on the abstraction (ILogger)
class UserService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    createUser(username: string): void {
        // Business logic to create a user
        this.logger.log(`User ${username} created.`);
    }
}

// Usage
const logger = new ConsoleLogger();
const userService = new UserService(logger);

userService.createUser('JohnDoe');
// Another example with a different logger implementation
class FileLogger implements ILogger {
    log(message: string): void {
        // Simulate writing to a file
        console.log(`Writing to a file: ${message}`);
    }
}

const fileLogger = new FileLogger();
const userServiceWithFileLogger = new UserService(fileLogger);

userServiceWithFileLogger.createUser('JaneDoe');
// Another example with a different service that uses the logger
class OrderService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    createOrder(orderId: string): void {
        // Business logic to create an order
        this.logger.log(`Order ${orderId} created.`);
    }
}

const orderService = new OrderService(logger);
orderService.createOrder('12345');

const orderServiceWithFileLogger = new OrderService(fileLogger);
orderServiceWithFileLogger.createOrder('67890');
// Example that applies the Dependency Inversion Principle
class EmailService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    sendEmail(email: string): void {
        // Business logic to send an email
        this.logger.log(`Email sent to ${email}.`);
    }
}

const emailService = new EmailService(logger);
emailService.sendEmail('example@example.com');

const emailServiceWithFileLogger = new EmailService(fileLogger);
emailServiceWithFileLogger.sendEmail('example2@example.com');

// Example that violates the Dependency Inversion Principle
class PaymentService {
    private consoleLogger: ConsoleLogger;

    constructor() {
        this.consoleLogger = new ConsoleLogger();
    }

    processPayment(amount: number): void {
        // Business logic to process a payment
        this.consoleLogger.log(`Payment of $${amount} processed.`);
    }
}

const paymentService = new PaymentService();
paymentService.processPayment(100);