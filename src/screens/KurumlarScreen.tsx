import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';
import { mockData } from '../services/mockData';

const KurumlarScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('Tümü');

  const filters = ['Tümü', 'Belediye', 'Su İdaresi', 'Elektrik', 'Gaz'];

  const getRatingColor = (rating: number) => {
    if (rating >= 4.0) return colors.success;
    if (rating >= 3.0) return colors.warning;
    return colors.error;
  };

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const renderInstitutionCard = (institution: any) => (
    <View key={institution.id} style={styles.institutionCard}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.institutionName}>{institution.name}</Text>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color={colors.accent} />
            <Text style={[styles.rating, { color: getRatingColor(institution.rating) }]}>
              {institution.rating}
            </Text>
          </View>
        </View>
      </View>

      {/* Services */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesTitle}>Hizmetler:</Text>
        <View style={styles.servicesGrid}>
          {institution.services.map((service: string, index: number) => (
            <View key={index} style={styles.serviceTag}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Performance Metrics */}
      <View style={styles.metricsContainer}>
        <View style={styles.metric}>
          <MaterialIcons name="schedule" size={20} color={colors.primary} />
          <View style={styles.metricContent}>
            <Text style={styles.metricLabel}>Yanıt Süresi</Text>
            <Text style={styles.metricValue}>{institution.responseTime}</Text>
          </View>
        </View>
        <View style={styles.metric}>
          <MaterialIcons name="check-circle" size={20} color={colors.success} />
          <View style={styles.metricContent}>
            <Text style={styles.metricLabel}>Çözüm Oranı</Text>
            <Text style={styles.metricValue}>%{institution.resolutionRate}</Text>
          </View>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>İletişim</Text>
        <View style={styles.contactRow}>
          <MaterialIcons name="phone" size={16} color={colors.primary} />
          <TouchableOpacity onPress={() => handleCall(institution.phone)}>
            <Text style={styles.contactText}>{institution.phone}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactRow}>
          <MaterialIcons name="email" size={16} color={colors.primary} />
          <TouchableOpacity onPress={() => handleEmail(institution.email)}>
            <Text style={styles.contactText}>{institution.email}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactRow}>
          <MaterialIcons name="location-on" size={16} color={colors.primary} />
          <Text style={styles.addressText}>{institution.address}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.primaryButton]}
          onPress={() => handleCall(institution.phone)}
        >
          <MaterialIcons name="phone" size={20} color={colors.white} />
          <Text style={styles.primaryButtonText}>Ara</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => handleEmail(institution.email)}
        >
          <MaterialIcons name="email" size={20} color={colors.primary} />
          <Text style={styles.secondaryButtonText}>E-posta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFilterChip = (filter: string) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterChip,
        selectedFilter === filter && styles.filterChipActive
      ]}
      onPress={() => setSelectedFilter(filter)}
    >
      <Text style={[
        styles.filterText,
        selectedFilter === filter && styles.filterTextActive
      ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kurumlar</Text>
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="filter-list" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color={colors.gray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Kurum ara..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={colors.gray}
          />
        </View>
      </View>

      {/* Filter Chips */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map(renderFilterChip)}
      </ScrollView>

      {/* Institutions List */}
      <ScrollView 
        style={styles.institutionsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {mockData.institutions.map(renderInstitutionCard)}
      </ScrollView>
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
  headerButton: {
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
  },
  searchContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.base,
    color: colors.darkGray,
    marginLeft: spacing.md,
  },
  filterContainer: {
    maxHeight: 60,
  },
  filterContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
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
  institutionsList: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  institutionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: spacing.lg,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  institutionName: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
    flex: 1,
    marginRight: spacing.md,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  rating: {
    fontSize: typography.sm,
    fontWeight: 'bold',
    marginLeft: spacing.xs,
  },
  servicesContainer: {
    marginBottom: spacing.lg,
  },
  servicesTitle: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: spacing.sm,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  serviceTag: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  serviceText: {
    fontSize: typography.sm,
    color: colors.primary,
    fontWeight: '600',
  },
  metricsContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    gap: spacing.lg,
  },
  metric: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  metricContent: {
    marginLeft: spacing.md,
  },
  metricLabel: {
    fontSize: typography.xs,
    color: colors.gray,
  },
  metricValue: {
    fontSize: typography.sm,
    fontWeight: 'bold',
    color: colors.darkGray,
  },
  contactContainer: {
    marginBottom: spacing.lg,
  },
  contactTitle: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: spacing.md,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  contactText: {
    fontSize: typography.sm,
    color: colors.primary,
    marginLeft: spacing.md,
    fontWeight: '600',
  },
  addressText: {
    fontSize: typography.sm,
    color: colors.gray,
    marginLeft: spacing.md,
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: typography.base,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: typography.base,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
});

export default KurumlarScreen;
