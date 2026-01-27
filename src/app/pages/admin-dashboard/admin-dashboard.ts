import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data'; // Make sure this path finds your file!

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-dashboard.html',
    styleUrl: './admin-dashboard.scss'
})
export class AdminDashboardPageComponent implements OnInit {
    private dataService = inject(DataService);

    activeTab: string = 'overview';

    // Variables to hold the data from the database
    messages: any[] = [];
    recommendations: any[] = [];

    stats = {
        totalMessages: 0,
        newRecommendations: 0,
        satisfactionRate: 100
    };

    // This function runs automatically when the page loads
    ngOnInit() {
        this.loadData();
    }

    loadData() {
        // 1. Get Contacts from Eclipse
        this.dataService.getContacts().subscribe({
            next: (data) => {
                console.log('Contacts found:', data); // Check your browser console!
                this.messages = data;
                this.stats.totalMessages = data.length;
            },
            error: (err) => console.error('Error loading contacts:', err)
        });

        // 2. Get Recommendations from Eclipse
        this.dataService.getRecommendations().subscribe({
            next: (data) => {
                console.log('Recommendations found:', data);
                this.recommendations = data;
                this.stats.newRecommendations = data.length;
            },
            error: (err) => console.error('Error loading recommendations:', err)
        });
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }
}