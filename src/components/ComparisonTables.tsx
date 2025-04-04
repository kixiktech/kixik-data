
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const ComparisonTables = () => {
  const competitorMethods = [
    { method: "Generic LinkedIn scraping", description: "Outdated and oversaturated approach that everyone uses" },
    { method: "Basic firmographics", description: "Surface-level company data without context" },
    { method: "Manual intent guessing", description: "Hoping businesses need what you offer" },
    { method: "Spray-and-pray outreach", description: "High volume, low relevance messaging" }
  ];

  const ourEdge = [
    { method: "60B weekly behavioral signals", description: "Real-time tracking of prospect activity" },
    { method: "B2B2C identity linking", description: "Connect business and consumer behavior patterns" },
    { method: "Real-time search tracking", description: "Target people searching for \"n8n integration\" / \"AI cost savings\"" },
    { method: "SIC-coded decision makers", description: "Reach executives actively researching solutions" }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Their Methods Table */}
      <div className="border border-gold/30 rounded-md overflow-hidden">
        <h3 className="text-xl md:text-2xl terminal-text p-6 text-center bg-dark-200 border-b border-gold/30">
          Their Losing Methods
        </h3>
        <div className="overflow-x-auto">
          <Table>
            <TableBody>
              {competitorMethods.map((item, index) => (
                <TableRow key={index} className="border-b border-gold/30 hover:bg-dark-200/50 transition-colors">
                  <TableCell className="font-terminal py-4 px-6 md:w-1/3">
                    <span className="text-gold/80">{item.method}</span>
                  </TableCell>
                  <TableCell className="font-terminal py-4 px-6 text-gold/60 italic">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Our Edge Table */}
      <div className="border border-gold/30 rounded-md overflow-hidden">
        <h3 className="text-xl md:text-2xl terminal-text p-6 text-center bg-dark-200 border-b border-gold/30">
          Our Proprietary Edge
        </h3>
        <div className="overflow-x-auto">
          <Table>
            <TableBody>
              {ourEdge.map((item, index) => (
                <TableRow key={index} className="border-b border-gold/30 hover:bg-dark-200/50 transition-colors">
                  <TableCell className="font-terminal py-4 px-6 md:w-1/3">
                    <span className="text-gold">{item.method}</span>
                  </TableCell>
                  <TableCell className="font-terminal py-4 px-6 text-gold/80">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-24 border-2 border-gold p-6 md:p-8 bg-dark-200/50 rounded-md">
        <p className="terminal-text text-xl text-center mx-auto max-w-3xl gold-glow">
          Our partner agencies are landing clients within 7 days using our high-intent data and quick scaling system.
        </p>
      </div>
    </div>
  );
};

export default ComparisonTables;
