import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';
import { mockData } from '../services/mockData';

const ProfilScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const renderAchievementBadge = (achievement: any) => (
    <View key={achievement.id} style={[
      styles.achievementBadge,
      !achievement.unlocked && styles.achievementLocked
    ]}>
      <MaterialIcons 
        name={achievement.icon} 
        size={24} 
        color={achievement.unlocked ? colors.accent : colors.gray} 
      />
      <Text style={[
        styles.achievementTitle,
        !achievement.unlocked && styles.achievementTitleLocked
      ]}>
        {achievement.title}
      </Text>
      <Text style={[
        styles.achievementDescription,
        !achievement.unlocked && styles.achievementDescriptionLocked
      ]}>
        {achievement.description}
      </Text>
    </View>
  );

  const renderSettingItem = (
    icon: any,
    title: string,
    subtitle?: string,
    hasSwitch = false,
    switchValue?: boolean,
    onSwitchChange?: (value: boolean) => void,
    onPress?: () => void
  ) => (
    <TouchableOpacity 
      key={title}
      style={styles.settingItem}
      onPress={onPress}
      disabled={hasSwitch}
    >
      <View style={styles.settingIcon}>
        <MaterialIcons name={icon} size={24} color={colors.primary} />
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: colors.lightGray, true: colors.secondary }}
          thumbColor={switchValue ? colors.primary : colors.gray}
        />
      ) : (
        <MaterialIcons name="chevron-right" size={24} color={colors.gray} />
      )}
    </TouchableOpacity>
  );

  const renderStatCard = (icon: any, value: string | number, label: string, color: string) => (
    <View key={label} style={styles.statCard}>
      <MaterialIcons name={icon} size={28} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.settingsButton}>
            <MaterialIcons name="settings" size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profil</Text>
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: mockData.user.avatar }} 
              style={styles.avatar}
            />
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{mockData.user.level}</Text>
            </View>
          </View>
          <Text style={styles.userName}>{mockData.user.name}</Text>
          <Text style={styles.userLocation}>
            {mockData.user.district}, {mockData.user.city}
          </Text>
          <Text style={styles.memberSince}>
            Üye olma tarihi: {new Date(mockData.user.memberSince).toLocaleDateString('tr-TR')}
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          {renderStatCard('report', mockData.user.complaintsSubmitted, 'Şikayet', colors.primary)}
          {renderStatCard('check-circle', mockData.user.complaintsResolved, 'Çözüldü', colors.success)}
          {renderStatCard('photo', mockData.user.photosShared, 'Fotoğraf', colors.secondary)}
          {renderStatCard('favorite', mockData.user.likesReceived, 'Beğeni', colors.error)}
        </View>

        {/* Points & Level */}
        <View style={styles.pointsContainer}>
          <View style={styles.pointsHeader}>
            <Text style={styles.pointsTitle}>Toplam Puan</Text>
            <Text style={styles.pointsValue}>{mockData.user.points}</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <Text style={styles.nextLevel}>Platinum seviyesine 250 puan kaldı</Text>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Başarılar</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.achievementsContainer}
            contentContainerStyle={styles.achievementsContent}
          >
            {mockData.achievements.map(renderAchievementBadge)}
          </ScrollView>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ayarlar</Text>
          <View style={styles.settingsContainer}>
            {renderSettingItem(
              'notifications',
              'Bildirimler',
              'Yeni şikayet güncellemeleri',
              true,
              notificationsEnabled,
              setNotificationsEnabled
            )}
            {renderSettingItem(
              'location-on',
              'Konum Servisleri',
              'Şikayet konumu paylaşımı',
              true,
              locationEnabled,
              setLocationEnabled
            )}
            {renderSettingItem(
              'language',
              'Dil',
              'Türkçe',
              false,
              undefined,
              undefined,
              () => {}
            )}
            {renderSettingItem(
              'dark-mode',
              'Tema',
              'Açık tema',
              false,
              undefined,
              undefined,
              () => {}
            )}
            {renderSettingItem(
              'privacy-tip',
              'Gizlilik',
              'Gizlilik ayarları ve politikası',
              false,
              undefined,
              undefined,
              () => {}
            )}
            {renderSettingItem(
              'help',
              'Yardım & Destek',
              'SSS ve iletişim',
              false,
              undefined,
              undefined,
              () => {}
            )}
          </View>
        </View>

        {/* History Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Geçmiş</Text>
          <View style={styles.historyContainer}>
            <TouchableOpacity style={styles.historyItem}>
              <MaterialIcons name="history" size={24} color={colors.primary} />
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>Şikayet Geçmişi</Text>
                <Text style={styles.historySubtitle}>Gönderdiğiniz şikayetler</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.historyItem}>
              <MaterialIcons name="photo-library" size={24} color={colors.secondary} />
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>Fotoğraf Geçmişi</Text>
                <Text style={styles.historySubtitle}>Paylaştığınız fotoğraflar</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={colors.gray} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialIcons name="logout" size={24} color={colors.error} />
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
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
  settingsButton: {
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
  },
  editButton: {
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    backgroundColor: colors.white,
    marginBottom: spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.lightGray,
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  levelText: {
    fontSize: typography.xs,
    fontWeight: 'bold',
    color: colors.white,
  },
  userName: {
    fontSize: typography.xl,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  userLocation: {
    fontSize: typography.base,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  memberSince: {
    fontSize: typography.sm,
    color: colors.gray,
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
  statValue: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.darkGray,
    marginTop: spacing.sm,
  },
  statLabel: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  pointsContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  pointsTitle: {
    fontSize: typography.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  pointsValue: {
    fontSize: typography.xl,
    fontWeight: 'bold',
    color: colors.accent,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.lightGray,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: borderRadius.sm,
  },
  nextLevel: {
    fontSize: typography.sm,
    color: colors.gray,
    textAlign: 'center',
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
  achievementsContainer: {
    paddingLeft: spacing.lg,
  },
  achievementsContent: {
    paddingRight: spacing.lg,
  },
  achievementBadge: {
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
  achievementLocked: {
    opacity: 0.5,
  },
  achievementTitle: {
    fontSize: typography.sm,
    fontWeight: 'bold',
    color: colors.darkGray,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  achievementTitleLocked: {
    color: colors.gray,
  },
  achievementDescription: {
    fontSize: typography.xs,
    color: colors.gray,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  achievementDescriptionLocked: {
    color: colors.lightGray,
  },
  settingsContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  settingIcon: {
    marginRight: spacing.lg,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.darkGray,
  },
  settingSubtitle: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  historyContainer: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  historyContent: {
    flex: 1,
    marginLeft: spacing.lg,
  },
  historyTitle: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.darkGray,
  },
  historySubtitle: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.xl,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.error,
  },
  logoutText: {
    fontSize: typography.base,
    fontWeight: '600',
    color: colors.error,
    marginLeft: spacing.sm,
  },
});

export default ProfilScreen;
