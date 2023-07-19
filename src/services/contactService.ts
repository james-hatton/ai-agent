import { Contact } from '../types/contact';

export class ContactService {
    private static instance: ContactService;
    private contacts: Contact[] = [];

    private constructor() {}

    public static getInstance(): ContactService {
        if (!ContactService.instance) {
            ContactService.instance = new ContactService();
        }

        return ContactService.instance;
    }

    public getContacts(): Contact[] {
        return this.contacts;
    }

    public addContact(contact: Contact): void {
        this.contacts.push(contact);
    }
}