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

const { width } = Dimensions.get('window');

const AnasayfaScreen = () => {
  const renderRecentComplaint = (complaint: any) => (
    <TouchableOpacity key={complaint.id} style={styles.recentComplaintCard}>
      <View style={styles.complaintImagePlaceholder}>
        <MaterialIcons name="report-problem" size={24} color={colors.primary} />
      </View>
      <View style={styles.complaintContent}>
        <Text style={styles.complaintTitle}>{complaint.title}</Text>
        <Text style={styles.complaintCategory}>{complaint.category}</Text>
      </View>
      <View style={styles.complaintStatus}>
        <Text style={styles.statusText}>{complaint.status}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderServiceOption = (service: any) => (
    <TouchableOpacity key={service.id} style={styles.serviceCard}>
      <MaterialIcons name={service.icon as any} size={32} color={colors.primary} />
      <Text style={styles.serviceName}>{service.name}</Text>
      <View style={styles.serviceRating}>
        <MaterialIcons name="star" size={16} color={colors.accent} />
        <Text style={styles.rating}>{service.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>İyi günler {mockData.user.name.split(' ')[0]} </Text>
            <View style={styles.pointsContainer}>
              <MaterialIcons name="star" size={16} color={colors.accent} />
              <Text style={styles.points}>{mockData.user.points}</Text>
              <Text style={styles.pointsLabel}>puan</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialIcons name="notifications" size={24} color={colors.primary} />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <MaterialIcons name="account-circle" size={32} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Action Card - Şikayet Et */}
        <View style={styles.mainActionCard}>
          <View style={styles.actionCardHeader}>
            <Text style={styles.membershipTitle}>ŞİKAYET ÜYESİ</Text>
            <Text style={styles.membershipDescription}>
              Şehrinizi geliştirmek için şikayet/öneri gönderin.
            </Text>
          </View>
          
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Şikayet bakiyesi:</Text>
            <Text style={styles.progressValue}>{mockData.user.complaintsSubmitted}/15</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${(mockData.user.complaintsSubmitted / 15) * 100}%` }]} />
            </View>
          </View>

          <TouchableOpacity style={styles.mainActionButton}>
            <Text style={styles.actionButtonText}>ŞİKAYET ET</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
          <View style={styles.quickServicesGrid}>
            <TouchableOpacity style={styles.quickServiceCard}>
              <MaterialIcons name="photo-camera" size={24} color={colors.white} />
              <Text style={styles.quickServiceText}>Fotoğraf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickServiceCard}>
              <MaterialIcons name="map" size={24} color={colors.white} />
              <Text style={styles.quickServiceText}>Harita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickServiceCard}>
              <MaterialIcons name="phone" size={24} color={colors.white} />
              <Text style={styles.quickServiceText}>Acil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Complaints */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Son şikayetleriniz</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Tümü →</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockData.complaints.slice(0, 3).map(renderRecentComplaint)}
          </ScrollView>
        </View>

        {/* City Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Şehir Hizmetleri</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.servicesContainer}
          >
            {mockData.cityServices.map(renderServiceOption)}
          </ScrollView>
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
  // Yeni Starbucks tarzı stiller
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  points: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  pointsLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  mainActionCard: {
    backgroundColor: colors.white,
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  actionCardHeader: {
    marginBottom: spacing.lg,
  },
  membershipTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 4,
  },
  membershipDescription: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 20,
  },
  progressSection: {
    marginBottom: spacing.xl,
  },
  progressLabel: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 4,
  },
  progressValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  mainActionButton: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  quickServicesGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  quickServiceCard: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  quickServiceText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  recentComplaintCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    marginRight: spacing.md,
    width: 280,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintImagePlaceholder: {
    height: 120,
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: borderRadius.md,
    borderTopRightRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  complaintContent: {
    padding: spacing.lg,
  },
  complaintTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: spacing.xs,
  },
  complaintCategory: {
    fontSize: 12,
    color: colors.gray,
  },
  complaintStatus: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 10,
    color: colors.white,
    fontWeight: '600',
  },
  serviceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default AnasayfaScreen;
