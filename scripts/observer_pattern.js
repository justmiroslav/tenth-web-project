// Abstract User class
class User {
    constructor(name) {
        this.name = name;
    }
  
    update(news) {
        console.log(`Good news for you, ${this.name}: ${news}`);
    }
}

// NewsPublisher class responsible for adding and deleting subscribers and notifying them
class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    publishNews(news) {
        this.subscribers.forEach((subscriber) => {
            subscriber.update(news);
        });
    }
}

// Example usage of the Observer Pattern
const user1 = new User("Carl");
const user2 = new User("Emily");
const newsPublisher = new NewsPublisher();

newsPublisher.subscribe(user1);
newsPublisher.subscribe(user2);
newsPublisher.publishNews("You are alive");
newsPublisher.unsubscribe(user2);
newsPublisher.publishNews("You are women");
