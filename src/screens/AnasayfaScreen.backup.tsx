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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Responsive helper functions
const isSmallScreen = screenWidth < 375;
const isMediumScreen = screenWidth >= 375 && screenWidth < 414;
const isLargeScreen = screenWidth >= 414;
const isTablet = screenWidth >= 768;

const getResponsiveSize = (small: number, medium: number, large: number, tablet?: number) => {
  if (isTablet && tablet) return tablet;
  if (isSmallScreen) return small;
  if (isMediumScreen) return medium;
  return large;
};

const getResponsivePadding = () => getResponsiveSize(16, 20, 24, 32);
const getResponsiveFontSize = (base: number) => getResponsiveSize(base - 2, base, base + 2, base + 4);
const getCardWidth = () => screenWidth * (isTablet ? 0.45 : 0.85);
const getServiceCardWidth = () => screenWidth * (isTablet ? 0.2 : 0.4);

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
            <Text style={styles.greeting}>İyi günler {mockData.user.name.split(' ')[0]}</Text>
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
    paddingHorizontal: getResponsivePadding(),
    paddingVertical: getResponsiveSize(12, 16, 20, 24),
  },
  greeting: {
    fontSize: getResponsiveFontSize(20),
    fontWeight: 'bold',
    color: colors.darkGray,
    marginBottom: 4,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  points: {
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    color: colors.primary,
  },
  pointsLabel: {
    fontSize: getResponsiveFontSize(12),
    color: colors.gray,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getResponsiveSize(8, 12, 16, 20),
  },
  notificationButton: {
    position: 'relative',
    padding: getResponsiveSize(4, 6, 8, 10),
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF3B30',
    borderRadius: getResponsiveSize(8, 10, 12, 14),
    width: getResponsiveSize(16, 18, 20, 22),
    height: getResponsiveSize(16, 18, 20, 22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: getResponsiveFontSize(10),
    fontWeight: 'bold',
  },
  profileButton: {
    width: getResponsiveSize(32, 36, 40, 44),
    height: getResponsiveSize(32, 36, 40, 44),
    borderRadius: getResponsiveSize(16, 18, 20, 22),
    overflow: 'hidden',
  },
  mainActionCard: {
    backgroundColor: colors.white,
    marginHorizontal: getResponsivePadding(),
    marginVertical: getResponsiveSize(16, 20, 24, 28),
    borderRadius: getResponsiveSize(12, 16, 20, 24),
    padding: getResponsiveSize(16, 20, 24, 32),
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    maxWidth: isTablet ? 600 : '100%',
    alignSelf: isTablet ? 'center' : 'stretch',
  },
  actionCardHeader: {
    marginBottom: getResponsiveSize(16, 20, 24, 28),
  },
  membershipTitle: {
    fontSize: getResponsiveFontSize(11),
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 4,
  },
  membershipDescription: {
    fontSize: getResponsiveFontSize(14),
    color: colors.gray,
    lineHeight: getResponsiveSize(18, 20, 22, 24),
  },
  mainActionButton: {
    backgroundColor: colors.primary,
    borderRadius: getResponsiveSize(20, 24, 28, 32),
    height: getResponsiveSize(44, 48, 52, 56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: getResponsiveFontSize(16),
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  section: {
    marginBottom: getResponsiveSize(20, 24, 28, 32),
  },
  sectionTitle: {
    fontSize: getResponsiveFontSize(18),
    fontWeight: 'bold',
    color: colors.primary,
    paddingHorizontal: getResponsivePadding(),
    marginBottom: getResponsiveSize(12, 16, 20, 24),
  },
  quickServicesGrid: {
    flexDirection: isTablet ? 'row' : 'row',
    justifyContent: 'space-around',
    paddingHorizontal: getResponsivePadding(),
    gap: getResponsiveSize(8, 12, 16, 20),
    flexWrap: isTablet ? 'wrap' : 'nowrap',
  },
  quickServiceCard: {
    width: isTablet ? (screenWidth - 100) / 6 : (screenWidth - 64) / 3,
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderRadius: getResponsiveSize(12, 16, 20, 24),
    padding: getResponsiveSize(12, 16, 20, 24),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: getResponsiveSize(70, 80, 90, 100),
  },
  quickServiceText: {
    color: colors.white,
    fontSize: getResponsiveFontSize(12),
    fontWeight: '600',
    marginTop: getResponsiveSize(6, 8, 10, 12),
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getResponsivePadding(),
    marginBottom: getResponsiveSize(12, 16, 20, 24),
  },
  seeAllText: {
    fontSize: getResponsiveFontSize(14),
    color: colors.primary,
    fontWeight: '600',
  },
  recentComplaintCard: {
    backgroundColor: colors.white,
    borderRadius: getResponsiveSize(12, 16, 20, 24),
    marginRight: getResponsiveSize(12, 16, 20, 24),
    width: getCardWidth(),
    minWidth: isTablet ? 300 : 260,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  complaintImagePlaceholder: {
    height: getResponsiveSize(100, 120, 140, 160),
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: getResponsiveSize(12, 16, 20, 24),
    borderTopRightRadius: getResponsiveSize(12, 16, 20, 24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  complaintContent: {
    padding: getResponsiveSize(12, 16, 20, 24),
  },
  complaintTitle: {
    fontSize: getResponsiveFontSize(14),
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: getResponsiveSize(4, 6, 8, 10),
  },
  complaintCategory: {
    fontSize: getResponsiveFontSize(12),
    color: colors.gray,
  },
  complaintStatus: {
    position: 'absolute',
    top: getResponsiveSize(8, 10, 12, 16),
    right: getResponsiveSize(8, 10, 12, 16),
    backgroundColor: colors.primary,
    borderRadius: getResponsiveSize(6, 8, 10, 12),
    paddingHorizontal: getResponsiveSize(8, 10, 12, 16),
    paddingVertical: getResponsiveSize(4, 6, 8, 10),
  },
  statusText: {
    fontSize: getResponsiveFontSize(10),
    color: colors.white,
    fontWeight: '600',
  },
  servicesContainer: {
    paddingLeft: getResponsivePadding(),
  },
  serviceCard: {
    backgroundColor: colors.white,
    padding: getResponsiveSize(12, 16, 20, 24),
    borderRadius: getResponsiveSize(12, 16, 20, 24),
    marginRight: getResponsiveSize(12, 16, 20, 24),
    width: getServiceCardWidth(),
    minWidth: isTablet ? 150 : 120,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceName: {
    fontSize: getResponsiveFontSize(12),
    fontWeight: '600',
    color: colors.darkGray,
    textAlign: 'center',
    marginVertical: getResponsiveSize(8, 10, 12, 16),
    lineHeight: getResponsiveFontSize(16),
  },
  serviceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: getResponsiveFontSize(12),
    fontWeight: 'bold',
    color: colors.darkGray,
    marginLeft: 4,
  },
});

export default AnasayfaScreen;
