/**
 * Console logger utility
 */

class ConsoleLogger {
    static logBanner(title, items) {
        console.log('╔═══════════════════════════╗');
        console.log(`║  ${title.padEnd(23)} ║`);

        items.forEach(item => {
            console.log(`║  ${item.padEnd(23)} ║`);
        });

        console.log('╚═══════════════════════════╝');
    }

    static logKeygenInfo() {
        this.logBanner('', [
            '"Sooooo... how are',
            'things?"',
            '',
            '- Claptrap'
        ]);
    }
}
