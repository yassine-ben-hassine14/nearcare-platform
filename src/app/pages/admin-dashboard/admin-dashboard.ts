import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-dashboard.html',
    styleUrl: './admin-dashboard.scss'
})
export class AdminDashboardPageComponent implements OnInit {

    constructor(private dataService: DataService) { }

    activeTab: string = 'overview';

    messages: any[] = [];
    recommendations: any[] = [];

    stats = {
        totalMessages: 0,
        newRecommendations: 0,
        satisfactionRate: 100 // hardcoded for now
    };

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.dataService.getContacts().subscribe({
            next: (data) => {
                console.log('Contacts loaded:', data);
                this.messages = data;
                this.stats.totalMessages = data.length;
            },
            error: (err) => console.error('Error loading contacts:', err)
        });

        this.dataService.getRecommendations().subscribe({
            next: (data) => {
                console.log('Recommendations loaded:', data);
                this.recommendations = data;
                this.stats.newRecommendations = data.length;
            },
            error: (err) => console.error('Error loading recommendations:', err)
        });
    }

    setActiveTab(tabName: string) {
        this.activeTab = tabName;
    }
}