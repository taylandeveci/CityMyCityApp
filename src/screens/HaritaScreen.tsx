import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';
import { mockData } from '../services/mockData';

const { height } = Dimensions.get('window');

const HaritaScreen = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Yol ve Kaldırım', 'Temizlik', 'Aydınlatma', 'Park ve Bahçe'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Çözüldü': return colors.success;
      case 'İncelemede': return colors.warning;
      case 'Beklemede': return colors.error;
      default: return colors.gray;
    }
  };

  const renderComplaintCard = (complaint: any) => (
    <TouchableOpacity key={complaint.id} style={styles.complaintCard}>
      <View style={styles.complaintHeader}>
        <Text style={styles.complaintTitle}>{complaint.title}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(complaint.status) }]}>
          <Text style={styles.statusText}>{complaint.status}</Text>
        </View>
      </View>
      <Text style={styles.complaintDescription}>{complaint.description}</Text>
      <View style={styles.complaintFooter}>
        <Text style={styles.complaintCategory}>{complaint.category}</Text>
        <Text style={styles.complaintDate}>{complaint.date}</Text>
      </View>
      <View style={styles.complaintStats}>
        <View style={styles.statItem}>
          <MaterialIcons name="thumb-up" size={16} color={colors.primary} />
          <Text style={styles.statText}>{complaint.likes}</Text>
        </View>
        <View style={styles.statItem}>
          <MaterialIcons name="comment" size={16} color={colors.primary} />
          <Text style={styles.statText}>{complaint.comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.filterContainer}
      contentContainerStyle={styles.filterContent}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.filterChip,
            selectedCategory === category && styles.filterChipActive
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={[
            styles.filterText,
            selectedCategory === category && styles.filterTextActive
          ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const filteredComplaints = selectedCategory === 'Tümü' 
    ? mockData.complaints 
    : mockData.complaints.filter(c => c.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Harita & Şikayetler</Text>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons name="search" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'map' && styles.tabActive]}
          onPress={() => setActiveTab('map')}
        >
          <MaterialIcons 
            name="map" 
            size={20} 
            color={activeTab === 'map' ? colors.white : colors.gray} 
          />
          <Text style={[
            styles.tabText,
            activeTab === 'map' && styles.tabTextActive
          ]}>
            Harita
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'list' && styles.tabActive]}
          onPress={() => setActiveTab('list')}
        >
          <MaterialIcons 
            name="list" 
            size={20} 
            color={activeTab === 'list' ? colors.white : colors.gray} 
          />
          <Text style={[
            styles.tabText,
            activeTab === 'list' && styles.tabTextActive
          ]}>
            Liste
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'map' ? (
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <MaterialIcons name="map" size={64} color={colors.gray} />
            <Text style={styles.mapPlaceholderText}>Harita Görünümü</Text>
            <Text style={styles.mapSubText}>Şikayetler harita üzerinde işaretlenecek</Text>
          </View>
          
          {/* Map Controls */}
          <View style={styles.mapControls}>
            <TouchableOpacity style={styles.mapControl}>
              <MaterialIcons name="my-location" size={24} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mapControl}>
              <MaterialIcons name="layers" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.listContainer}>
          {renderCategoryFilter()}
          <ScrollView 
            style={styles.complaintsList}
            showsVerticalScrollIndicator={false}
          >
            {filteredComplaints.map(renderComplaintCard)}
          </ScrollView>
        </View>
      )}

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="add" size={28} color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  searchButton: {
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
    borderRadius: borderRadius.md,
    padding: spacing.xs,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.sm,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: typography.base,
    color: colors.gray,
    marginLeft: spacing.sm,
    fontWeight: '600',
  },
  tabTextActive: {
    color: colors.white,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  mapPlaceholderText: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.gray,
    marginTop: spacing.md,
  },
  mapSubText: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  mapControls: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.xl,
    gap: spacing.md,
  },
  mapControl: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.full,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listContainer: {
    flex: 1,
  },
  filterContainer: {
    maxHeight: 60,
  },
  filterContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  filterChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: typography.sm,
    color: colors.gray,
    fontWeight: '600',
  },
  filterTextActive: {
    color: colors.white,
  },
  complaintsList: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  complaintCard: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  complaintTitle: {
    fontSize: typography.base,
    fontWeight: 'bold',
    color: colors.darkGray,
    flex: 1,
    marginRight: spacing.md,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  statusText: {
    fontSize: typography.xs,
    color: colors.white,
    fontWeight: '600',
  },
  complaintDescription: {
    fontSize: typography.sm,
    color: colors.gray,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  complaintFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  complaintCategory: {
    fontSize: typography.sm,
    color: colors.primary,
    fontWeight: '600',
  },
  complaintDate: {
    fontSize: typography.sm,
    color: colors.gray,
  },
  complaintStats: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: typography.sm,
    color: colors.darkGray,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.xl,
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default HaritaScreen;
