import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

// Import the data from JSON file
import spendingData from '../../Assets/importdata.json';

interface SpendingEntry {
  date: string;
  spending: {category: string; amount: number}[];
}

const ExpenseScreen: React.FC = () => {
  const [, setData] = useState<SpendingEntry[]>([]);

  useEffect(() => {
    // Set the imported data when the component mounts
    setData(spendingData);
  }, []);

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.header}>Sachin's Spending Data</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <BarChart
          data={{
            labels: spendingData.map(entry => entry.date),
            datasets: [
              {
                data: spendingData.map(entry =>
                  entry.spending.reduce(
                    (total, item) => total + item.amount,
                    0,
                  ),
                ),
              },
            ],
          }}
          width={spendingData.length * 60} // Adjust width based on the number of data points
          height={250}
          yAxisLabel="₹"
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  chartContainer: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ExpenseScreen;
