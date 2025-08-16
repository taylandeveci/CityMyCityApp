import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';

const { width } = Dimensions.get('window');
const ITEM_SIZE = (width - spacing.lg * 3) / 2;

const SelfieScreen = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Tümü');

  const filters = ['Tümü', 'Şikayetler', 'Çözümler', 'Beğenilenler'];

  // Mock gallery data
  const galleryData = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    uri: `https://picsum.photos/300/300?random=${index}`,
    type: index % 3 === 0 ? 'video' : 'photo',
    likes: Math.floor(Math.random() * 50) + 1,
    comments: Math.floor(Math.random() * 20) + 1,
    isLiked: Math.random() > 0.5,
    caption: `Şehirdeki güzel anlar #${index + 1}`,
    date: '2024-08-15',
  }));

  const renderGalleryItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.galleryItem}>
      <Image source={{ uri: item.uri }} style={styles.galleryImage} />
      
      {/* Video indicator */}
      {item.type === 'video' && (
        <View style={styles.videoIndicator}>
          <MaterialIcons name="play-circle-filled" size={24} color={colors.white} />
        </View>
      )}

      {/* Overlay with stats */}
      <View style={styles.imageOverlay}>
        <View style={styles.imageStats}>
          <View style={styles.statItem}>
            <MaterialIcons 
              name="favorite" 
              size={16} 
              color={item.isLiked ? colors.error : colors.white} 
            />
            <Text style={styles.statText}>{item.likes}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="comment" size={16} color={colors.white} />
            <Text style={styles.statText}>{item.comments}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFilterChip = (filter: string) => (
    <TouchableOpacity
      key={filter}
      style={[
        styles.filterChip,
        activeFilter === filter && styles.filterChipActive
      ]}
      onPress={() => setActiveFilter(filter)}
    >
      <Text style={[
        styles.filterText,
        activeFilter === filter && styles.filterTextActive
      ]}>
        {filter}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Foto Galerisi</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialIcons name="search" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialIcons name="more-vert" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="photo" size={24} color={colors.primary} />
          <Text style={styles.statNumber}>28</Text>
          <Text style={styles.statLabel}>Fotoğraf</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="videocam" size={24} color={colors.secondary} />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Video</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="favorite" size={24} color={colors.error} />
          <Text style={styles.statNumber}>156</Text>
          <Text style={styles.statLabel}>Beğeni</Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {filters.map(renderFilterChip)}
      </ScrollView>

      {/* Gallery Grid */}
      <FlatList
        data={galleryData}
        renderItem={renderGalleryItem}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.galleryContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />

      {/* Camera FAB */}
      <TouchableOpacity style={styles.cameraFab}>
        <MaterialIcons name="camera-alt" size={28} color={colors.white} />
      </TouchableOpacity>

      {/* Secondary FAB for video */}
      <TouchableOpacity style={styles.videoFab}>
        <MaterialIcons name="videocam" size={24} color={colors.white} />
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
  headerActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  headerButton: {
    padding: spacing.sm,
    backgroundColor: colors.background,
    borderRadius: borderRadius.full,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
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
    color: colors.darkGray,
    marginTop: spacing.sm,
  },
  statLabel: {
    fontSize: typography.sm,
    color: colors.gray,
    marginTop: spacing.xs,
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
  galleryContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 100,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  galleryItem: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    position: 'relative',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightGray,
  },
  videoIndicator: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.overlay,
    borderRadius: borderRadius.full,
    padding: spacing.xs,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlay,
    padding: spacing.sm,
  },
  imageStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: typography.xs,
    color: colors.white,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },
  cameraFab: {
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
  videoFab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.xl + 70,
    backgroundColor: colors.secondary,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default SelfieScreen;
