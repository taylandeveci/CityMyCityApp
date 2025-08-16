import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';
import { mockData } from '../services/mockData';
import QuickActionButton from '../components/QuickActionButton';

const { width } = Dimensions.get('window');

const AnasayfaScreen = () => {
  const renderServiceCard = (service: any) => (
    <View key={service.id} style={styles.serviceCard}>
      <MaterialIcons name={service.icon as any} size={24} color={colors.primary} />
      <Text style={styles.serviceName}>{service.name}</Text>
      <View style={styles.ratingContainer}>
        <MaterialIcons name="star" size={16} color={colors.accent} />
        <Text style={styles.rating}>{service.rating}</Text>
      </View>
    </View>
  );

  const renderActivityItem = (item: any) => (
    <View key={item.id} style={styles.activityItem}>
      <MaterialIcons 
        name={item.type === 'complaint' ? 'report-problem' : 
              item.type === 'photo' ? 'camera-alt' : 'check-circle'} 
        size={20} 
        color={colors.primary} 
      />
      <View style={styles.activityContent}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activityTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Merhaba,</Text>
            <Text style={styles.userName}>{mockData.user.name}</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.complaintButton}>
              <MaterialIcons name="add" size={18} color={colors.white} />
              <Text style={styles.complaintButtonText}>Şikayet Et</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialIcons name="notifications" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{mockData.user.complaintsSubmitted}</Text>
            <Text style={styles.statLabel}>Şikayet</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{mockData.user.complaintsResolved}</Text>
            <Text style={styles.statLabel}>Çözüldü</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{mockData.user.points}</Text>
            <Text style={styles.statLabel}>Puan</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hızlı İşlemler</Text>
          <View style={styles.quickActionsGrid}>
            <QuickActionButton 
              iconName="photo-camera" 
              title="Fotoğraf\nÇek" 
              onPress={() => {}} 
            />
            <QuickActionButton 
              iconName="location-on" 
              title="Haritayı\nAç" 
              onPress={() => {}} 
            />
            <QuickActionButton 
              iconName="phone" 
              title="Acil\nArama" 
              onPress={() => {}} 
            />
          </View>
        </View>

        {/* City Services Ratings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Şehir Hizmetleri</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.servicesContainer}
          >
            {mockData.cityServices.map(renderServiceCard)}
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Son Aktiviteler</Text>
          <View style={styles.activityContainer}>
            {mockData.recentActivity.map(renderActivityItem)}
          </View>
        </View>
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
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  complaintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintButtonText: {
    color: colors.white,
    fontSize: typography.sm,
    fontWeight: '600',
    marginLeft: spacing.xs,
  },
  greeting: {
    fontSize: typography.base,
    color: colors.gray,
  },
  userName: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  notificationButton: {
    padding: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  servicesContainer: {
    paddingLeft: spacing.lg,
  },
  serviceCard: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginRight: spacing.md,
    width: 120,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceName: {
    fontSize: typography.sm,
    fontWeight: '600',
    color: colors.darkGray,
    textAlign: 'center',
    marginVertical: spacing.sm,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: typography.sm,
    fontWeight: 'bold',
    color: colors.darkGray,
    marginLeft: spacing.xs,
  },
  activityContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  activityContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  activityTitle: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.darkGray,
  },
  activityTime: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
  },
});

export default AnasayfaScreen;
